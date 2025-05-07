"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPart } from "@/lib/api";
import { PartInput } from "@/types/part";

export default function NewPartPage() {
  const router = useRouter();

  const [form, setForm] = useState<PartInput>({
    part_number: "",
    status: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof PartInput, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.part_number || !form.status) {
      setError("Compila tutti i campi.");
      return;
    }

    try {
      await createPart(form);
      router.push("/parts");
    } catch (err) {
      console.error(err);
      setError("Errore durante la creazione. Riprova.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Nuova Parte</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="part_number">Part Number</Label>
          <Input
            id="part_number"
            value={form.part_number}
            onChange={(e) => handleChange("part_number", e.target.value)}
            placeholder="es. CP-00123"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Stato</Label>
          <Input
            id="status"
            value={form.status}
            onChange={(e) => handleChange("status", e.target.value)}
            placeholder="es. in attesa, laminata..."
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
