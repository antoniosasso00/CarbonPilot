"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import { createPart, getCatalogParts } from "@/lib/api";
import { PartInput, PartStatus } from "@/types/part";
import { CatalogPart } from "@/types/catalog_part";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const STATUS_OPTIONS = [
  { value: "pending", label: "In Attesa" },
  { value: "ready", label: "Pronta" },
  { value: "in_progress", label: "In Lavorazione" },
  { value: "completed", label: "Completata" },
  { value: "rejected", label: "Rifiutata" },
];

export default function NewPartPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isCatalogLoading, setIsCatalogLoading] = useState(true);

  const [form, setForm] = useState<PartInput>({
    name: "",
    status: "pending",
    catalog_part_id: 0,
    valves_required: 1,
    priority: 1
  });

  const [catalogOptions, setCatalogOptions] = useState<CatalogPart[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof PartInput, string>>>({});

  useEffect(() => {
    const loadCatalog = async () => {
      try {
        const parts = await getCatalogParts();
        setCatalogOptions(parts);
      } catch (error) {
        toast.error("Errore nel caricamento del catalogo");
        console.error(error);
      } finally {
        setIsCatalogLoading(false);
      }
    };

    loadCatalog();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PartInput, string>> = {};

    if (!form.name) {
      newErrors.name = "Il nome è obbligatorio";
    }

    if (!form.status) {
      newErrors.status = "Lo stato è obbligatorio";
    }

    if (!form.valves_required || form.valves_required < 1) {
      newErrors.valves_required = "Sono richieste almeno una valvola";
    }

    if (!form.catalog_part_id) {
      newErrors.catalog_part_id = "Seleziona una parte dal catalogo";
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

    setIsLoading(true);
    try {
      await createPart(form);
      toast.success("Parte creata con successo");
      router.push("/parts");
    } catch (err) {
      console.error(err);
      toast.error("Errore durante la creazione della parte");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Nuova Parte</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome *</Label>
          <Input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="es. 8G02 o CP-123"
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Stato *</Label>
          <Select
            value={form.status}
            onValueChange={(value) => handleChange("status", value as PartStatus)}
            disabled={isLoading}
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

        <div className="space-y-2">
          <Label htmlFor="valves_required">Valvole Richieste *</Label>
          <Input
            id="valves_required"
            type="number"
            min="1"
            value={form.valves_required}
            onChange={(e) => handleChange("valves_required", parseInt(e.target.value) || 1)}
            disabled={isLoading}
          />
          {errors.valves_required && (
            <p className="text-sm text-red-600">{errors.valves_required}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priorità</Label>
          <Input
            id="priority"
            type="number"
            min="1"
            max="10"
            value={form.priority}
            onChange={(e) => handleChange("priority", parseInt(e.target.value) || 1)}
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="catalog_part_id">Parte Catalogo *</Label>
          <Select
            value={form.catalog_part_id?.toString() ?? ""}
            onValueChange={(value) =>
              handleChange("catalog_part_id", parseInt(value))
            }
            disabled={isLoading || isCatalogLoading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleziona una parte dal catalogo" />
            </SelectTrigger>
            <SelectContent>
              {catalogOptions.map((cp) => (
                <SelectItem key={cp.id} value={cp.id.toString()}>
                  {cp.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.catalog_part_id && (
            <p className="text-sm text-red-600">{errors.catalog_part_id}</p>
          )}
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Salvataggio..." : "Salva"}
          </Button>
        </div>
      </form>
    </div>
  );
}
