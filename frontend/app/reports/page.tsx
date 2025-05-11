"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { downloadScheduleReport, downloadNestingReport } from "@/lib/api"
import { format } from "date-fns"
import { it } from "date-fns/locale"
import { Loader2, FileDown } from "lucide-react"
import { toast } from "sonner"

type Report = {
  id: number
  type: "schedule" | "nesting"
  date: string
  autoclave_id: number
  num_parts: number
}

// Mock data per i report (da sostituire con API reale quando disponibile)
const MOCK_REPORTS: Report[] = [
  {
    id: 1,
    type: "schedule",
    date: "2025-05-11T10:00:00",
    autoclave_id: 1,
    num_parts: 5
  },
  {
    id: 2,
    type: "nesting",
    date: "2025-05-11T11:30:00",
    autoclave_id: 2,
    num_parts: 3
  }
]

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([])
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState<number | null>(null)

  useEffect(() => {
    // Simula il caricamento dei report
    const fetchReports = async () => {
      try {
        // TODO: Sostituire con chiamata API reale
        await new Promise(resolve => setTimeout(resolve, 1000))
        setReports(MOCK_REPORTS)
      } catch (err) {
        toast.error("Errore nel caricamento dei report")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  const handleDownload = async (report: Report) => {
    setDownloading(report.id)
    try {
      let blob: Blob
      if (report.type === "schedule") {
        blob = await downloadScheduleReport(report.id)
      } else {
        blob = await downloadNestingReport(report.id)
      }
      
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `report-${report.type}-${report.id}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      toast.success("Report scaricato con successo")
    } catch (err) {
      // Se l'API non è implementata, simula il download con un PDF vuoto
      const blob = new Blob([""], { type: "application/pdf" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `report-${report.type}-${report.id}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      toast.success("Report scaricato con successo (simulato)")
    } finally {
      setDownloading(null)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Report</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Generati</CardTitle>
        </CardHeader>
        <CardContent>
          {reports.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Nessun report disponibile
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Autoclave</TableHead>
                  <TableHead>Parti</TableHead>
                  <TableHead className="text-right">Azioni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">#{report.id}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-sm ${
                        report.type === "schedule" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                      }`}>
                        {report.type === "schedule" ? "Pianificazione" : "Nesting"}
                      </span>
                    </TableCell>
                    <TableCell>
                      {format(new Date(report.date), "d MMM yyyy, HH:mm", { locale: it })}
                    </TableCell>
                    <TableCell>Autoclave {report.autoclave_id}</TableCell>
                    <TableCell>{report.num_parts} parti</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(report)}
                        disabled={downloading === report.id}
                      >
                        {downloading === report.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <FileDown className="h-4 w-4 mr-2" />
                            PDF
                          </>
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 