"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getSchedules } from "@/lib/api";
import { Schedule } from "@/types/schedule";
import { format } from "date-fns";
import { it } from "date-fns/locale";

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const data = await getSchedules();
        // Ordina le pianificazioni per data di inizio
        const sortedSchedules = data.sort((a, b) => 
          new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
        );
        setSchedules(sortedSchedules);
      } catch (err) {
        setError("Errore nel caricamento delle pianificazioni");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  const getScheduleStatus = (schedule: Schedule) => {
    const now = new Date();
    const start = new Date(schedule.start_time);
    const end = new Date(schedule.end_time);

    if (now < start) {
      return { label: "In attesa", class: "bg-yellow-100 text-yellow-800" };
    } else if (now >= start && now <= end) {
      return { label: "In corso", class: "bg-green-100 text-green-800" };
    } else {
      return { label: "Completata", class: "bg-blue-100 text-blue-800" };
    }
  };

  const formatDate = (date: string) => {
    return format(new Date(date), "d MMM yyyy, HH:mm", { locale: it });
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 space-y-4">
        <div className="h-8 w-48 bg-gray-200 animate-pulse rounded" />
        <div className="h-64 bg-gray-200 animate-pulse rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="text-red-800">{error}</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Pianificazioni</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pianificazioni Future e Recenti</CardTitle>
        </CardHeader>
        <CardContent>
          {schedules.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Nessuna pianificazione disponibile
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Autoclave</TableHead>
                  <TableHead>Parti</TableHead>
                  <TableHead>Layout</TableHead>
                  <TableHead>Inizio</TableHead>
                  <TableHead>Fine</TableHead>
                  <TableHead>Stato</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((schedule) => {
                  const status = getScheduleStatus(schedule);
                  return (
                    <TableRow key={schedule.id}>
                      <TableCell className="font-medium">#{schedule.id}</TableCell>
                      <TableCell>Autoclave {schedule.autoclave_id}</TableCell>
                      <TableCell>{schedule.parts.length} parti</TableCell>
                      <TableCell>
                        {schedule.nesting_layout_id ? (
                          `Layout #${schedule.nesting_layout_id}`
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </TableCell>
                      <TableCell>{formatDate(schedule.start_time)}</TableCell>
                      <TableCell>{formatDate(schedule.end_time)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-sm ${status.class}`}>
                          {status.label}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
