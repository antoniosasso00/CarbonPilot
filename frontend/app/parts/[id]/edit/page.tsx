"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getPartById, updatePart } from "@/lib/api";
import { PartInput } from "@/types/part";

export default function EditPartPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const [form, setForm] = useState<PartInput>({
    part_number: "",
    status: "",
    width: 0,
    height: 0,
    valves_required: 1,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    getPartById(id)
      .then((data) => {
        setForm({
          part_number: data.part_number,
          status: data.status,
          width: data.width,
          height: data.height,
          valves_required: data.valves_required,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Errore nel recupero dati.");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (field: keyof PartInput, value: string) => {
    setForm({ ...form, [field]: field === "part_number" || field === "status" ? value : parseInt(value) || 0 });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updatePart(id, form);
      router.push("/parts");
    } catch (err) {
      console.error(err);
      setError("Errore durante il salvataggio.");
    }
  };

  if (loading) return <p>Caricamento...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Modifica Parte</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="part_number">Part Number</Label>
          <Input
            id="part_number"
            value={form.part_number}
            onChange={(e) => handleChange("part_number", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Stato</Label>
          <Input
            id="status"
            value={form.status}
            onChange={(e) => handleChange("status", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width">Larghezza (mm)</Label>
            <Input
              id="width"
              type="number"
              value={form.width}
              onChange={(e) => handleChange("width", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Altezza (mm)</Label>
            <Input
              id="height"
              type="number"
              value={form.height}
              onChange={(e) => handleChange("height", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="valves_required">Valvole Richieste</Label>
          <Input
            id="valves_required"
            type="number"
            value={form.valves_required}
            onChange={(e) => handleChange("valves_required", e.target.value)}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="pt-2">
          <Button type="submit">Salva Modifiche</Button>
        </div>
      </form>
    </div>
  );
}
