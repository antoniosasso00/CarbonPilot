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
    code: "",
    default_height: 0,
    default_width: 0,
    default_cycle_code: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof CatalogPartInput, value: string) => {
    if (["code", "default_cycle_code"].includes(field)) {
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
          <Label htmlFor="code">Part Number</Label>
          <Input id="code" value={form.code} onChange={(e) => handleChange("code", e.target.value)} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="height">Lunghezza (mm)</Label>
            <Input id="height" type="number" value={form.default_height} onChange={(e) => handleChange("default_height", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="width">Larghezza (mm)</Label>
            <Input id="width" type="number" value={form.default_width} onChange={(e) => handleChange("default_width", e.target.value)} />
          </div>
        </div>

        <div>
          <Label htmlFor="cycle">Ciclo</Label>
          <Input id="cycle" value={form.default_cycle_code} onChange={(e) => handleChange("default_cycle_code", e.target.value)} />
        </div>

        {error && <p className="text-red-600">{error}</p>}
        <Button type="submit">Salva</Button>
      </form>
    </div>
  );
}
