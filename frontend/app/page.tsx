"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { useEffect, useState } from "react"

interface DashboardStats {
  autoclaves: {
    total: number
    active: number
    available: number
  }
  parts: {
    total: number
    inProgress: number
    completed: number
    ready: number
  }
  schedules: {
    upcoming: Array<{
      id: string
      start: string
      end: string
      autoclave: string
      parts: number
    }>
  }
  layouts: Array<{
    id: string
    date: string
    efficiency: number
    parts: number
  }>
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [autoclaves, parts, schedules, layouts] = await Promise.all([
          fetch("http://localhost:8000/api/v1/autoclaves").then(res => res.json()),
          fetch("http://localhost:8000/api/v1/parts").then(res => res.json()),
          fetch("http://localhost:8000/api/v1/schedules").then(res => res.json()),
          fetch("http://localhost:8000/api/v1/nesting").then(res => res.json())
        ])

        // Processo i dati per ottenere le statistiche necessarie
        const activeAutoclaves = autoclaves.filter((a: any) => a.status === "running")
        const partsInProgress = parts.filter((p: any) => p.status === "in_progress")
        const partsCompleted = parts.filter((p: any) => p.status === "completed")
        const partsReady = parts.filter((p: any) => p.status === "ready")

        // Filtro le pianificazioni future
        const now = new Date()
        const upcomingSchedules = schedules
          .filter((s: any) => new Date(s.start_time) > now)
          .slice(0, 5)
          .map((s: any) => ({
            id: s.id,
            start: new Date(s.start_time).toLocaleString(),
            end: new Date(s.end_time).toLocaleString(),
            autoclave: s.autoclave_id,
            parts: s.parts.length
          }))

        // Prendo gli ultimi 5 layout ordinati per data
        const recentLayouts = layouts
          .slice(0, 5)
          .map((l: any) => ({
            id: l.id,
            date: new Date(l.created_at).toLocaleDateString(),
            efficiency: l.efficiency,
            parts: l.parts.length
          }))

        setStats({
          autoclaves: {
            total: autoclaves.length,
            active: activeAutoclaves.length,
            available: autoclaves.length - activeAutoclaves.length
          },
          parts: {
            total: parts.length,
            inProgress: partsInProgress.length,
            completed: partsCompleted.length,
            ready: partsReady.length
          },
          schedules: {
            upcoming: upcomingSchedules
          },
          layouts: recentLayouts
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto p-6 space-y-6">
        <div className="h-12 w-64 bg-gray-200 animate-pulse rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-200 animate-pulse rounded" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Dashboard CarbonPilot</h1>
        <div className="text-sm px-2 py-1 rounded border border-gray-200">v1.0.0</div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Autoclavi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Attive</span>
                <span className="px-2 py-1 rounded bg-green-100 text-green-800">{stats?.autoclaves.active}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Disponibili</span>
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-800">{stats?.autoclaves.available}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Totali</span>
                <span className="px-2 py-1 rounded bg-gray-100">{stats?.autoclaves.total}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Parti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>In Lavorazione</span>
                <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800">{stats?.parts.inProgress}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Pronte</span>
                <span className="px-2 py-1 rounded bg-green-100 text-green-800">{stats?.parts.ready}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Completate</span>
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-800">{stats?.parts.completed}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pianificazioni Future</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded border border-blue-200 bg-blue-50">
              <p className="font-medium">Prossimo ciclo</p>
              <p className="text-sm text-gray-600">
                {stats?.schedules.upcoming[0] ? (
                  `${stats.schedules.upcoming[0].start}`
                ) : (
                  "Nessuna pianificazione"
                )}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Layout Nesting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {stats?.layouts.slice(0, 2).map((layout, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span>Layout {layout.id}</span>
                  <span className="px-2 py-1 rounded bg-gray-100">{layout.efficiency}% eff.</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Tables */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Prossime Pianificazioni</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Inizio</TableHead>
                  <TableHead>Fine</TableHead>
                  <TableHead>Autoclave</TableHead>
                  <TableHead>Parti</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats?.schedules.upcoming.map((schedule) => (
                  <TableRow key={schedule.id}>
                    <TableCell>{schedule.start}</TableCell>
                    <TableCell>{schedule.end}</TableCell>
                    <TableCell>{schedule.autoclave}</TableCell>
                    <TableCell>{schedule.parts}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Layout Nesting Recenti</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>ID Layout</TableHead>
                  <TableHead>Efficienza</TableHead>
                  <TableHead>Parti</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats?.layouts.map((layout) => (
                  <TableRow key={layout.id}>
                    <TableCell>{layout.date}</TableCell>
                    <TableCell>{layout.id}</TableCell>
                    <TableCell>{layout.efficiency}%</TableCell>
                    <TableCell>{layout.parts}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        <Link href="/parts">
          <Button variant="outline" className="w-full h-16">
            Gestione Parti
          </Button>
        </Link>
        
        <Link href="/catalog">
          <Button variant="outline" className="w-full h-16">
            Catalogo
          </Button>
        </Link>
        
        <Link href="/autoclaves">
          <Button variant="outline" className="w-full h-16">
            Autoclavi
          </Button>
        </Link>
        
        <Link href="/schedules">
          <Button variant="outline" className="w-full h-16">
            Pianificazioni
          </Button>
        </Link>
        
        <Link href="/reports">
          <Button variant="outline" className="w-full h-16">
            Report
          </Button>
        </Link>
      </div>
    </div>
  )
}
