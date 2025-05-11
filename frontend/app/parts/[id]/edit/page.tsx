"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getPartById, updatePart } from "@/lib/api";
import { PartInput } from "@/types/part";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const STATUS_OPTIONS = [
  { value: "created", label: "Creata" },
  { value: "laminating", label: "In Laminazione" },
  { value: "ready", label: "Pronta" },
  { value: "autoclaved", label: "Autoclavata" },
];

export default function EditPartPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const [form, setForm] = useState<PartInput>({
    part_number: "",
    status: "created",
    width: 0,
    height: 0,
    valves_required: 1,
    source_catalog_id: undefined,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof PartInput, string>>>({});

  useEffect(() => {
    if (!id) return;

    const loadPart = async () => {
      try {
        const data = await getPartById(id);
        setForm({
          part_number: data.part_number,
          status: data.status,
          width: data.width,
          height: data.height,
          valves_required: data.valves_required,
          source_catalog_id: data.source_catalog_id,
        });
      } catch (error) {
        console.error(error);
        toast.error("Errore nel recupero dei dati della parte");
        router.push("/parts");
      } finally {
        setIsLoading(false);
      }
    };

    loadPart();
  }, [id, router]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PartInput, string>> = {};

    if (!form.part_number) {
      newErrors.part_number = "Il part number è obbligatorio";
    } else if (!/^[A-Za-z0-9-]+$/.test(form.part_number)) {
      newErrors.part_number = "Solo lettere, numeri e trattini sono permessi";
    }

    if (!form.status) {
      newErrors.status = "Lo stato è obbligatorio";
    }

    if (form.width < 0) {
      newErrors.width = "La larghezza non può essere negativa";
    }

    if (form.height < 0) {
      newErrors.height = "L'altezza non può essere negativa";
    }

    if (form.valves_required < 1) {
      newErrors.valves_required = "Sono richieste almeno una valvola";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof PartInput, value: string | number | undefined) => {
    setForm({ ...form, [field]: value });
    // Clear error when field is modified
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSaving(true);
    try {
      await updatePart(id, form);
      toast.success("Parte aggiornata con successo");
      router.push("/parts");
    } catch (err) {
      console.error(err);
      toast.error("Errore durante l'aggiornamento della parte");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Modifica Parte</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="part_number">Part Number *</Label>
          <Input
            id="part_number"
            type="text"
            value={form.part_number}
            onChange={(e) => handleChange("part_number", e.target.value)}
            placeholder="es. 8G02 o CP-123"
            disabled={isSaving}
          />
          {errors.part_number && (
            <p className="text-sm text-red-600">{errors.part_number}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Stato *</Label>
          <Select
            value={form.status}
            onValueChange={(value) => handleChange("status", value)}
            disabled={isSaving}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleziona uno stato" />
            </SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.status && <p className="text-sm text-red-600">{errors.status}</p>}
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
              disabled={isSaving}
            />
            {errors.width && <p className="text-sm text-red-600">{errors.width}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Altezza (mm)</Label>
            <Input
              id="height"
              type="number"
              value={form.height}
              onChange={(e) => handleChange("height", parseFloat(e.target.value) || 0)}
              placeholder="0"
              disabled={isSaving}
            />
            {errors.height && <p className="text-sm text-red-600">{errors.height}</p>}
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
            disabled={isSaving}
          />
          {errors.valves_required && (
            <p className="text-sm text-red-600">{errors.valves_required}</p>
          )}
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={isSaving}>
            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSaving ? "Salvataggio..." : "Salva Modifiche"}
          </Button>
        </div>
      </form>
    </div>
  );
}
