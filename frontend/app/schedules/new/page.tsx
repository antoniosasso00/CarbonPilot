"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createSchedule, getParts, getAutoclaves } from "@/lib/api";
import { Part } from "@/types/part";
import { Autoclave } from "@/types/autoclave";

export default function NewSchedulePage() {
  const router = useRouter();
  const [partId, setPartId] = useState<number | "">("");
  const [autoclaveId, setAutoclaveId] = useState<number | "">("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [parts, setParts] = useState<Part[]>([]);
  const [autoclaves, setAutoclaves] = useState<Autoclave[]>([]);

  useEffect(() => {
    getParts().then(setParts).catch(() => setError("Errore nel caricamento parti"));
    getAutoclaves().then(setAutoclaves).catch(() => setError("Errore nel caricamento autoclavi"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!partId || !autoclaveId || !startTime || !endTime) {
      setError("Compila tutti i campi.");
      return;
    }

    try {
      await createSchedule({
        part_id: Number(partId),
        autoclave_id: Number(autoclaveId),
        start_time: startTime,
        end_time: endTime,
      });
      router.push("/schedules");
    } catch (err) {
      console.error(err);
      setError("Errore durante la creazione.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Nuova Pianificazione</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label>Parte</Label>
          <select
            className="w-full border rounded p-2"
            value={partId}
            onChange={(e) => setPartId(Number(e.target.value))}
          >
            <option value="">Seleziona una parte</option>
            {parts.map((part) => (
              <option key={part.id} value={part.id}>
                {part.part_number}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label>Autoclave</Label>
          <select
            className="w-full border rounded p-2"
            value={autoclaveId}
            onChange={(e) => setAutoclaveId(Number(e.target.value))}
          >
            <option value="">Seleziona autoclave</option>
            {autoclaves.map((autoclave) => (
              <option key={autoclave.id} value={autoclave.id}>
                Autoclave {autoclave.id}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="start_time">Inizio</Label>
          <Input
            id="start_time"
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="end_time">Fine</Label>
          <Input
            id="end_time"
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="pt-2">
          <Button type="submit">Salva</Button>
        </div>
      </form>
    </div>
  );
}
