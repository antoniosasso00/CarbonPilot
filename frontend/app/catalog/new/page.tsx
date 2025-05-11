"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCatalogPart } from "@/lib/api";
import { CatalogPartInput } from "@/types/catalog_part";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function NewCatalogPartPage() {
  const router = useRouter();
  const [form, setForm] = useState<CatalogPartInput>({
    code: "",
    default_height: 0,
    default_width: 0,
    default_cycle_code: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof CatalogPartInput, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CatalogPartInput, string>> = {};

    if (!form.code) {
      newErrors.code = "Il codice è obbligatorio";
    } else if (!/^[A-Za-z0-9-]+$/.test(form.code)) {
      newErrors.code = "Solo lettere, numeri e trattini sono permessi";
    }

    if (form.default_width < 0) {
      newErrors.default_width = "La larghezza non può essere negativa";
    }

    if (form.default_height < 0) {
      newErrors.default_height = "L'altezza non può essere negativa";
    }

    if (!form.default_cycle_code) {
      newErrors.default_cycle_code = "Il codice ciclo è obbligatorio";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof CatalogPartInput, value: string) => {
    if (["code", "default_cycle_code"].includes(field)) {
      setForm({ ...form, [field]: value });
    } else {
      setForm({ ...form, [field]: parseFloat(value) || 0 });
    }
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
      await createCatalogPart(form);
      toast.success("Voce catalogo creata con successo");
      router.push("/catalog");
    } catch (err) {
      console.error(err);
      toast.error("Errore durante la creazione della voce catalogo");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Nuova Voce Catalogo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code">Part Number *</Label>
          <Input
            id="code"
            value={form.code}
            onChange={(e) => handleChange("code", e.target.value)}
            placeholder="es. CP-123"
            disabled={isLoading}
          />
          {errors.code && <p className="text-sm text-red-600">{errors.code}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="height">Lunghezza (mm)</Label>
            <Input
              id="height"
              type="number"
              value={form.default_height}
              onChange={(e) => handleChange("default_height", e.target.value)}
              placeholder="0"
              disabled={isLoading}
            />
            {errors.default_height && (
              <p className="text-sm text-red-600">{errors.default_height}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="width">Larghezza (mm)</Label>
            <Input
              id="width"
              type="number"
              value={form.default_width}
              onChange={(e) => handleChange("default_width", e.target.value)}
              placeholder="0"
              disabled={isLoading}
            />
            {errors.default_width && (
              <p className="text-sm text-red-600">{errors.default_width}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cycle">Ciclo *</Label>
          <Input
            id="cycle"
            value={form.default_cycle_code}
            onChange={(e) => handleChange("default_cycle_code", e.target.value)}
            placeholder="es. CYCLE-001"
            disabled={isLoading}
          />
          {errors.default_cycle_code && (
            <p className="text-sm text-red-600">{errors.default_cycle_code}</p>
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
