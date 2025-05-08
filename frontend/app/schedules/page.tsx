"use client";

import { useEffect, useState } from "react";
import { Calendar, momentLocalizer, Event as CalendarEvent } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getSchedules } from "@/lib/api";
import { Schedule } from "@/types/schedule";

const localizer = momentLocalizer(moment);

type Event = CalendarEvent & {
  id: number;
};

export default function SchedulePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSchedules()
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.part_number || `Autoclave ${item.autoclave_id}`,
          start: new Date(item.start_time),
          end: new Date(item.end_time),
        }));
        setEvents(formatted);
      })
      .catch(() => setError("Errore nel caricamento delle pianificazioni"));
  }, []);

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
        />
      </div>
    </div>
  );
}
