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
import { PartInput, PartStatus } from "@/types/part";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const STATUS_OPTIONS = [
  { value: "pending", label: "In Attesa" },
  { value: "ready", label: "Pronta" },
  { value: "in_progress", label: "In Lavorazione" },
  { value: "completed", label: "Completata" },
  { value: "rejected", label: "Rifiutata" },
] as const;

export default function EditPartPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const [form, setForm] = useState<PartInput>({
    name: "",
    description: "",
    catalog_part_id: 0,
    status: "pending",
    priority: 1,
    valves_required: 1,
    lamination_time: 0,
    cycle_code: ""
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
          name: data.name,
          description: data.description || "",
          catalog_part_id: data.catalog_part_id,
          status: data.status,
          priority: data.priority,
          valves_required: data.valves_required,
          lamination_time: data.lamination_time || 0,
          cycle_code: data.cycle_code || ""
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

    if (!form.name.trim()) {
      newErrors.name = "Il nome è obbligatorio";
    }

    if (!form.catalog_part_id) {
      newErrors.catalog_part_id = "La parte di catalogo è obbligatoria";
    }

    if (form.priority && form.priority < 1) {
      newErrors.priority = "La priorità deve essere maggiore di zero";
    }

    if (form.valves_required && form.valves_required < 1) {
      newErrors.valves_required = "È richiesta almeno una valvola";
    }

    if (form.lamination_time && form.lamination_time < 0) {
      newErrors.lamination_time = "Il tempo di laminazione non può essere negativo";
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
          <Label htmlFor="name">Nome *</Label>
          <Input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="es. Pannello Ala A380"
            disabled={isSaving}
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrizione</Label>
          <Input
            id="description"
            type="text"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Descrizione opzionale"
            disabled={isSaving}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="catalog_part_id">Parte Catalogo *</Label>
          <Input
            id="catalog_part_id"
            type="number"
            value={form.catalog_part_id}
            onChange={(e) => handleChange("catalog_part_id", parseInt(e.target.value) || 0)}
            placeholder="ID Parte Catalogo"
            disabled={isSaving}
          />
          {errors.catalog_part_id && (
            <p className="text-sm text-red-600">{errors.catalog_part_id}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Stato</Label>
          <Select
            value={form.status}
            onValueChange={(value) => handleChange("status", value as PartStatus)}
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
            <Label htmlFor="priority">Priorità</Label>
            <Input
              id="priority"
              type="number"
              value={form.priority}
              onChange={(e) => handleChange("priority", parseInt(e.target.value) || 0)}
              placeholder="1"
              disabled={isSaving}
            />
            {errors.priority && <p className="text-sm text-red-600">{errors.priority}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="valves_required">Valvole Richieste</Label>
            <Input
              id="valves_required"
              type="number"
              value={form.valves_required}
              onChange={(e) => handleChange("valves_required", parseInt(e.target.value) || 0)}
              placeholder="1"
              disabled={isSaving}
            />
            {errors.valves_required && (
              <p className="text-sm text-red-600">{errors.valves_required}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="lamination_time">Tempo Laminazione (min)</Label>
            <Input
              id="lamination_time"
              type="number"
              value={form.lamination_time}
              onChange={(e) => handleChange("lamination_time", parseInt(e.target.value) || 0)}
              placeholder="0"
              disabled={isSaving}
            />
            {errors.lamination_time && (
              <p className="text-sm text-red-600">{errors.lamination_time}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cycle_code">Codice Ciclo</Label>
            <Input
              id="cycle_code"
              type="text"
              value={form.cycle_code}
              onChange={(e) => handleChange("cycle_code", e.target.value)}
              placeholder="es. CYC-001"
              disabled={isSaving}
            />
            {errors.cycle_code && (
              <p className="text-sm text-red-600">{errors.cycle_code}</p>
            )}
          </div>
        </div>

        <Button type="submit" disabled={isSaving}>
          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSaving ? "Salvataggio..." : "Salva Modifiche"}
        </Button>
      </form>
    </div>
  );
}
