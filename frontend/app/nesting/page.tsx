"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getNestingResults, downloadNestingPDF } from "@/lib/api";
import { NestingResult } from "@/types/nesting";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function NestingPage() {
  const [layouts, setLayouts] = useState<NestingResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState<number | null>(null);

  useEffect(() => {
    const fetchLayouts = async () => {
      try {
        const data = await getNestingResults();
        // Ordina i layout per data di creazione (più recenti prima)
        const sortedLayouts = data.sort((a, b) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setLayouts(sortedLayouts);
      } catch (err) {
        toast.error("Errore nel caricamento dei layout");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLayouts();
  }, []);

  const handleDownloadPDF = async (layoutId: number) => {
    setDownloading(layoutId);
    try {
      const blob = await downloadNestingPDF(layoutId);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `layout-${layoutId}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success("PDF scaricato con successo");
    } catch (err) {
      toast.error("Errore durante il download del PDF");
      console.error(err);
    } finally {
      setDownloading(null);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Layout Nesting</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Layout Disponibili</CardTitle>
        </CardHeader>
        <CardContent>
          {layouts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Nessun layout disponibile
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Data Creazione</TableHead>
                  <TableHead>Autoclave</TableHead>
                  <TableHead>Parti</TableHead>
                  <TableHead>Efficienza</TableHead>
                  <TableHead className="text-right">Azioni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {layouts.map((layout) => (
                  <TableRow key={layout.id}>
                    <TableCell className="font-medium">#{layout.id}</TableCell>
                    <TableCell>
                      {format(new Date(layout.created_at), "d MMM yyyy, HH:mm", { locale: it })}
                    </TableCell>
                    <TableCell>Autoclave {layout.autoclave_id}</TableCell>
                    <TableCell>{layout.parts.length} parti</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-sm ${
                        layout.efficiency >= 80 ? "bg-green-100 text-green-800" :
                        layout.efficiency >= 60 ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {layout.efficiency}%
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadPDF(layout.id)}
                        disabled={downloading === layout.id}
                      >
                        {downloading === layout.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Scarica PDF"
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
  );
}
