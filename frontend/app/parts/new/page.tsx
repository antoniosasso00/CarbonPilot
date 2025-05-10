"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPart, getCatalogParts } from "@/lib/api";
import { PartInput } from "@/types/part";
import { CatalogPart } from "@/types/catalog_part";

const STATUS_OPTIONS = ["created", "laminating", "ready", "autoclaved"];

export default function NewPartPage() {
  const router = useRouter();

  const [form, setForm] = useState<PartInput>({
    part_number: "",
    status: "created",
    width: 0,
    height: 0,
    valves_required: 1,
    source_catalog_id: undefined,
  });

  const [catalogOptions, setCatalogOptions] = useState<CatalogPart[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCatalogParts().then(setCatalogOptions).catch(console.error);
  }, []);

  const handleChange = (field: keyof PartInput, value: string | number | undefined) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.part_number || !form.status) {
      setError("Compila tutti i campi obbligatori.");
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
          <Label htmlFor="part_number">Part Number *</Label>
          <Input
            id="part_number"
            type="text"
            pattern="^[A-Za-z0-9-]+$"
            value={form.part_number}
            onChange={(e) => handleChange("part_number", e.target.value)}
            placeholder="es. 8G02 o CP-123"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Stato *</Label>
          <select
            id="status"
            className="w-full border rounded px-3 py-2"
            value={form.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width">Larghezza (mm)</Label>
            <Input
              id="width"
              type="number"
              value={form.width}
              onChange={(e) => handleChange("width", parseFloat(e.target.value) || 0)}
              placeholder="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Altezza (mm)</Label>
            <Input
              id="height"
              type="number"
              value={form.height}
              onChange={(e) => handleChange("height", parseFloat(e.target.value) || 0)}
              placeholder="0"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="valves_required">Valvole Richieste</Label>
          <Input
            id="valves_required"
            type="number"
            min="1"
            value={form.valves_required}
            onChange={(e) => handleChange("valves_required", parseInt(e.target.value) || 1)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="source_catalog_id">Parte Catalogo (opzionale)</Label>
          <select
            id="source_catalog_id"
            className="w-full border rounded px-3 py-2"
            value={form.source_catalog_id ?? ""}
            onChange={(e) =>
              handleChange(
                "source_catalog_id",
                e.target.value === "" ? undefined : parseInt(e.target.value)
              )
            }
          >
            <option value="">— Nessuna —</option>
            {catalogOptions.map((cp) => (
              <option key={cp.id} value={cp.id}>
                {cp.code}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="pt-2">
          <Button type="submit">Salva</Button>
        </div>
      </form>
    </div>
  );
}
