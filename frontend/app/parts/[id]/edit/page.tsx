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
          width: data.width || 0,
          height: data.height || 0,
          valves_required: data.valves_required || 1,
        });
      })
      .catch(() => setError("Errore nel caricamento della parte."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (field: keyof PartInput, value: string | number) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.part_number || !form.status) {
      setError("Compila tutti i campi.");
      return;
    }

    try {
      await updatePart(id, form);
      router.push("/parts");
    } catch (err) {
      console.error(err);
      setError("Errore durante il salvataggio.");
    }
  };

  if (loading) return <p className="p-6 text-gray-500">Caricamento...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Modifica Parte</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="part_number">Part Number</Label>
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

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="pt-2">
          <Button type="submit">Salva Modifiche</Button>
        </div>
      </form>
    </div>
  );
}
