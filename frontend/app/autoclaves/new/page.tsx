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
    width: 0,
    height: 0,
    depth: 0,
    num_vacuum_lines: 0,
    is_available: true,
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof AutoclaveInput, value: string | boolean) => {
    setForm({
      ...form,
      [field]:
        field === "name"
          ? value
          : field === "is_available"
          ? value
          : parseFloat(value as string) || 0,
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
            <Label htmlFor="width">Larghezza (mm)</Label>
            <Input
              id="width"
              type="number"
              value={form.width}
              onChange={(e) => handleChange("width", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="height">Altezza (mm)</Label>
            <Input
              id="height"
              type="number"
              value={form.height}
              onChange={(e) => handleChange("height", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="depth">Profondità (mm)</Label>
            <Input
              id="depth"
              type="number"
              value={form.depth}
              onChange={(e) => handleChange("depth", e.target.value)}
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

        <div className="space-y-2 pt-4">
          <Label htmlFor="is_available">Disponibile</Label>
          <input
            id="is_available"
            type="checkbox"
            className="ml-2"
            checked={form.is_available}
            onChange={(e) => handleChange("is_available", e.target.checked)}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <Button type="submit">Crea</Button>
      </form>
    </div>
  );
}
