"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createAutoclave } from "@/lib/api";
import { AutoclaveInput } from "@/types/autoclave";

export default function NewAutoclavePage() {
  const router = useRouter();
  const [form, setForm] = useState<AutoclaveInput>({
    name: "",
    width_mm: 0,
    height_mm: 0,
    num_valves: 0,
    num_vacuum_lines: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof AutoclaveInput, value: string) => {
    setForm({
      ...form,
      [field]: field === "name" ? value : parseInt(value) || 0,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createAutoclave(form);
      router.push("/autoclaves");
    } catch (err) {
      console.error(err);
      setError("Errore nella creazione.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Nuova Autoclave</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="width_mm">Larghezza (mm)</Label>
            <Input
              id="width_mm"
              type="number"
              value={form.width_mm}
              onChange={(e) => handleChange("width_mm", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="height_mm">Altezza (mm)</Label>
            <Input
              id="height_mm"
              type="number"
              value={form.height_mm}
              onChange={(e) => handleChange("height_mm", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="num_valves">Valvole</Label>
            <Input
              id="num_valves"
              type="number"
              value={form.num_valves}
              onChange={(e) => handleChange("num_valves", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="num_vacuum_lines">Linee Vuoto</Label>
            <Input
              id="num_vacuum_lines"
              type="number"
              value={form.num_vacuum_lines}
              onChange={(e) => handleChange("num_vacuum_lines", e.target.value)}
            />
          </div>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <Button type="submit">Crea</Button>
      </form>
    </div>
  );
}
