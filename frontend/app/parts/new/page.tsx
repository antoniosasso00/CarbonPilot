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
import { PartInput } from "@/types/part";
import { CatalogPart } from "@/types/catalog_part";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const STATUS_OPTIONS = [
  { value: "created", label: "Creata" },
  { value: "laminating", label: "In Laminazione" },
  { value: "ready", label: "Pronta" },
  { value: "autoclaved", label: "Autoclavata" },
];

export default function NewPartPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isCatalogLoading, setIsCatalogLoading] = useState(true);

  const [form, setForm] = useState<PartInput>({
    part_number: "",
    status: "created",
    width: 0,
    height: 0,
    valves_required: 1,
    source_catalog_id: undefined,
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
          <Label htmlFor="part_number">Part Number *</Label>
          <Input
            id="part_number"
            type="text"
            value={form.part_number}
            onChange={(e) => handleChange("part_number", e.target.value)}
            placeholder="es. 8G02 o CP-123"
            disabled={isLoading}
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

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width">Larghezza (mm)</Label>
            <Input
              id="width"
              type="number"
              value={form.width}
              onChange={(e) => handleChange("width", parseFloat(e.target.value) || 0)}
              placeholder="0"
              disabled={isLoading}
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
              disabled={isLoading}
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
            disabled={isLoading}
          />
          {errors.valves_required && (
            <p className="text-sm text-red-600">{errors.valves_required}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="source_catalog_id">Parte Catalogo (opzionale)</Label>
          <Select
            value={form.source_catalog_id?.toString() ?? ""}
            onValueChange={(value) =>
              handleChange("source_catalog_id", value === "" ? undefined : parseInt(value))
            }
            disabled={isLoading || isCatalogLoading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleziona una parte dal catalogo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">— Nessuna —</SelectItem>
              {catalogOptions.map((cp) => (
                <SelectItem key={cp.id} value={cp.id.toString()}>
                  {cp.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
