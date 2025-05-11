"use client";

import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getSchedules, getScheduleById } from "@/lib/api";
import { Schedule } from "@/types/schedule";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const localizer = momentLocalizer(moment);

type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  part_ids: number[];
};

type ScheduleDetail = Schedule & {
  parts: {
    id: number;
    part_number: string;
    lamination_time?: number;
    cycle_code?: string;
  }[];
};

export default function SchedulePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<ScheduleDetail | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    getSchedules()
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          title: `${item.description || `Autoclave ${item.autoclave_id}`} (${item.part_ids.length} pezzi)`,
          start: new Date(item.start_time),
          end: new Date(item.end_time),
          part_ids: item.part_ids,
        }));
        setEvents(formatted);
      })
      .catch(() => setError("Errore nel caricamento delle pianificazioni"));
  }, []);

  const handleSelectEvent = async (event: Event) => {
    try {
      const data = await getScheduleById(event.id) as ScheduleDetail;
      setSelected(data);
      setDialogOpen(true);
    } catch {
      setError("Errore nel caricamento dettagli schedule");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Pianificazione Autoclavi</h1>
      {error && <p className="text-red-600">{error}</p>}

      <div className="bg-white rounded shadow">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          defaultView="week"
          onSelectEvent={handleSelectEvent}
        />
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dettagli pianificazione</DialogTitle>
          </DialogHeader>

          {selected && (
            <div className="space-y-3 text-sm">
              <p><strong>Autoclave:</strong> {selected.autoclave_id}</p>
              <p><strong>Descrizione:</strong> {selected.description || "—"}</p>
              <p><strong>Inizio:</strong> {new Date(selected.start_time).toLocaleString()}</p>
              <p><strong>Fine:</strong> {new Date(selected.end_time).toLocaleString()}</p>
              <p><strong>Numero pezzi:</strong> {selected.parts.length}</p>

              <div className="mt-4">
                <p className="font-semibold">Dettagli pezzi:</p>
                <ul className="list-disc list-inside space-y-1">
                  {selected.parts.map((part) => (
                    <li key={part.id}>
                      <span className="font-medium">{part.part_number}</span> – Laminazione: {part.lamination_time ?? "?"} min – Ciclo: {part.cycle_code ?? "N/A"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
