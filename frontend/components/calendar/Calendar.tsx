"use client";

import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { it } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { getSchedules } from "@/lib/api";
import { Schedule } from "@/types/schedule";

const locales = {
  "it-IT": it,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type CalendarEvent = {
    id: number;
    title: string;
    start: Date;
    end: Date;
    part_ids: number[];
  };  

export default function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    async function loadSchedules() {
      const data: Schedule[] = await getSchedules();
      const mapped = data.map((item) => ({
        id: item.id,
        title: `${item.description ?? "Pianificazione"} (${item.part_ids.length} pezzi)`,
        start: new Date(item.start_time),
        end: new Date(item.end_time),
        part_ids: item.part_ids,
      }));
      setEvents(mapped);
    }
    loadSchedules();
  }, []);

  return (
    <div className="p-4">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "75vh" }}
        defaultView="week"
        messages={{
          week: "Settimana",
          day: "Giorno",
          month: "Mese",
          today: "Oggi",
          previous: "Indietro",
          next: "Avanti",
          agenda: "Agenda",
        }}
      />
    </div>
  );
}
