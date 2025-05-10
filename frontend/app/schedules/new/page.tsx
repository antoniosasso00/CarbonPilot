"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createSchedule, getParts, getAutoclaves } from "@/lib/api";
import { Part } from "@/types/part";
import { Autoclave } from "@/types/autoclave";
import { ScheduleInput } from "@/types/schedule";

export default function NewSchedulePage() {
  const router = useRouter();
  const [form, setForm] = useState<ScheduleInput>({
    autoclave_id: 0,
    description: "",
    layout_id: "",
    color: "#CCCCCC",
    start_time: "",
    end_time: "",
    part_ids: [],
  });
  const [error, setError] = useState<string | null>(null);
  const [parts, setParts] = useState<Part[]>([]);
  const [autoclaves, setAutoclaves] = useState<Autoclave[]>([]);

  useEffect(() => {
    getParts().then(setParts).catch(() => setError("Errore nel caricamento parti"));
    getAutoclaves().then(setAutoclaves).catch(() => setError("Errore nel caricamento autoclavi"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { autoclave_id, start_time, end_time, part_ids } = form;

    if (!autoclave_id || !start_time || !end_time || part_ids.length === 0) {
      setError("Compila tutti i campi obbligatori.");
      return;
    }

    try {
      await createSchedule(form);
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
          <Label>Parti (selezione multipla)</Label>
          <select
            multiple
            className="w-full border rounded p-2 h-32"
            value={form.part_ids.map(String)}
            onChange={(e) =>
              setForm({
                ...form,
                part_ids: Array.from(e.target.selectedOptions, (opt) => Number(opt.value)),
              })
            }
          >
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
            value={form.autoclave_id || ""}
            onChange={(e) => setForm({ ...form, autoclave_id: Number(e.target.value) })}
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
          <Label>Inizio</Label>
          <Input
            type="datetime-local"
            value={form.start_time}
            onChange={(e) => setForm({ ...form, start_time: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Fine</Label>
          <Input
            type="datetime-local"
            value={form.end_time}
            onChange={(e) => setForm({ ...form, end_time: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Descrizione</Label>
          <Input
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Layout ID</Label>
          <Input
            value={form.layout_id}
            onChange={(e) => setForm({ ...form, layout_id: e.target.value })}
            placeholder="Es. LYT-001"
          />
        </div>

        <div className="space-y-2">
          <Label>Colore (esadecimale)</Label>
          <Input
            type="color"
            value={form.color}
            onChange={(e) => setForm({ ...form, color: e.target.value })}
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
