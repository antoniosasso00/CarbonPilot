"use client";

import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

// Tipizzazione evento per react-big-calendar
type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
};

type Schedule = {
  id: number;
  autoclave_id: number;
  description?: string;
  start_time: string;
  end_time: string;
};

const localizer = momentLocalizer(moment);

export default function SchedulePage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/schedules")
      .then((res) => res.json())
      .then((data: Schedule[]) => {
        const calendarEvents: CalendarEvent[] = data.map((sched) => ({
          id: sched.id,
          title: sched.description || `Autoclave ${sched.autoclave_id}`,
          start: new Date(sched.start_time),
          end: new Date(sched.end_time),
        }));
        setEvents(calendarEvents);
      })
      .catch((err) => console.error("Errore nel caricamento scheduling:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Calendario Pianificazione Autoclavi</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh" }}
      />
    </div>
  );
}
