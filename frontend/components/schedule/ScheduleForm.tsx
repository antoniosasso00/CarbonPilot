"use client";

import { useEffect, useState } from "react";
import { ScheduleInput } from "@/types/schedule";
import { getAutoclaves, getParts, createSchedule } from "@/lib/api";
import { Autoclave } from "@/types/autoclave";
import { Part } from "@/types/part";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function ScheduleForm() {
  const [autoclaves, setAutoclaves] = useState<Autoclave[]>([]);
  const [parts, setParts] = useState<Part[]>([]);
  const [selectedParts, setSelectedParts] = useState<number[]>([]);
  const [selectedAutoclave, setSelectedAutoclave] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<Date | undefined>(new Date());
  const [duration, setDuration] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    getAutoclaves().then(setAutoclaves);
    getParts().then(setParts);
  }, []);

  useEffect(() => {
    if (!selectedAutoclave || selectedParts.length === 0) {
      setDuration(0);
      return;
    }

    const autoclave = autoclaves.find((a) => a.id === selectedAutoclave);
    const selected = parts.filter((p) => selectedParts.includes(p.id));

    let max = 0;
    for (const part of selected) {
      const cycle = part.cycle_code;
      if (!cycle || !autoclave?.supported_cycles.some((c) => c.code === cycle)) {
        setError(`Ciclo ${cycle} non supportato da ${autoclave?.name}`);
        return;
      }
      const lam = part.lamination_time || 0;
      const dur = autoclave.supported_cycles.find((c) => c.code === cycle)?.duration_min || 0;
      max = Math.max(max, lam + dur);
    }

    setDuration(max);
    setError(null);
  }, [selectedAutoclave, selectedParts]);

  const handleSubmit = async () => {
    if (!selectedAutoclave || !startTime || selectedParts.length === 0) {
      setError("Compila tutti i campi");
      return;
    }

    try {
      const input: ScheduleInput = {
        autoclave_id: selectedAutoclave,
        start_time: startTime.toISOString(),
        part_ids: selectedParts,
      };
      await createSchedule(input);
      setSuccess("Pianificazione creata");
      setError(null);
    } catch (e) {
      setError("Errore nella creazione pianificazione");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Nuova pianificazione</h2>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}

      <div className="space-y-2">
        <Label>Autoclave</Label>
        <Select onValueChange={(val) => setSelectedAutoclave(Number(val))}>
          <SelectTrigger>
            <SelectValue placeholder="Seleziona autoclave" />
          </SelectTrigger>
          <SelectContent>
            {autoclaves.map((a) => (
              <SelectItem key={a.id} value={String(a.id)}>
                {a.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Parti da pianificare</Label>
        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto border rounded p-2">
          {parts.map((p) => (
            <label key={p.id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedParts.includes(p.id)}
                onChange={(e) =>
                  setSelectedParts((prev) =>
                    e.target.checked ? [...prev, p.id] : prev.filter((id) => id !== p.id)
                  )
                }
              />
              {p.part_number}
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Data inizio</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              {startTime ? format(startTime, "dd/MM/yyyy HH:mm") : "Seleziona data"}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar mode="single" selected={startTime} onSelect={setStartTime} />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <p><strong>Durata stimata:</strong> {duration} minuti</p>
      </div>

      <Button onClick={handleSubmit} className="mt-4">Crea pianificazione</Button>
    </div>
  );
}
