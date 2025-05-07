"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCatalogPart } from "@/lib/api";
import { CatalogPartInput } from "@/types/catalog_part";

export default function NewCatalogPartPage() {
  const router = useRouter();
  const [form, setForm] = useState<CatalogPartInput>({
    part_number: "",
    length_mm: 0,
    width_mm: 0,
    thickness_mm: 0,
    cure_cycle: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof CatalogPartInput, value: string) => {
    if (["part_number", "cure_cycle"].includes(field)) {
      setForm({ ...form, [field]: value });
    } else {
      setForm({ ...form, [field]: parseFloat(value) || 0 });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCatalogPart(form);
      router.push("/catalog");
    } catch (err) {
      console.error(err);
      setError("Errore durante la creazione.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Nuova Voce Catalogo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="part_number">Part Number</Label>
          <Input id="part_number" value={form.part_number} onChange={(e) => handleChange("part_number", e.target.value)} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="length">Lunghezza (mm)</Label>
            <Input id="length" type="number" value={form.length_mm} onChange={(e) => handleChange("length_mm", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="width">Larghezza (mm)</Label>
            <Input id="width" type="number" value={form.width_mm} onChange={(e) => handleChange("width_mm", e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="thickness">Spessore (mm)</Label>
            <Input id="thickness" type="number" value={form.thickness_mm} onChange={(e) => handleChange("thickness_mm", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="cure_cycle">Ciclo</Label>
            <Input id="cure_cycle" value={form.cure_cycle} onChange={(e) => handleChange("cure_cycle", e.target.value)} />
          </div>
        </div>

        {error && <p className="text-red-600">{error}</p>}
        <Button type="submit">Salva</Button>
      </form>
    </div>
  );
}
