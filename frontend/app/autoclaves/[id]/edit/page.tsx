"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { getAutoclaveById, updateAutoclave } from "@/lib/api";
import { AutoclaveInput } from "@/types/autoclave";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function EditAutoclavePage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const [form, setForm] = useState<AutoclaveInput>({
    name: "",
    width: 0,
    height: 0,
    depth: 0,
    num_vacuum_lines: 0,
    is_available: true,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof AutoclaveInput, string>>>({});

  useEffect(() => {
    if (!id) return;

    const loadAutoclave = async () => {
      try {
        const data = await getAutoclaveById(id);
        setForm({
          name: data.name,
          width: data.width,
          height: data.height,
          depth: data.depth,
          num_vacuum_lines: data.num_vacuum_lines,
          is_available: data.is_available,
        });
      } catch (error) {
        console.error(error);
        toast.error("Errore nel recupero dei dati dell'autoclave");
        router.push("/autoclaves");
      } finally {
        setIsLoading(false);
      }
    };

    loadAutoclave();
  }, [id, router]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof AutoclaveInput, string>> = {};

    if (!form.name) {
      newErrors.name = "Il nome è obbligatorio";
    }

    if (form.width <= 0) {
      newErrors.width = "La larghezza deve essere maggiore di zero";
    }

    if (form.height <= 0) {
      newErrors.height = "L'altezza deve essere maggiore di zero";
    }

    if (form.depth <= 0) {
      newErrors.depth = "La profondità deve essere maggiore di zero";
    }

    if (form.num_vacuum_lines < 0) {
      newErrors.num_vacuum_lines = "Il numero di linee vuoto non può essere negativo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof AutoclaveInput, value: string | boolean) => {
    setForm({
      ...form,
      [field]:
        field === "name"
          ? value
          : field === "is_available"
          ? value
          : parseFloat(value as string) || 0,
    });
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
      await updateAutoclave(id, form);
      toast.success("Autoclave aggiornata con successo");
      router.push("/autoclaves");
    } catch (err) {
      console.error(err);
      toast.error("Errore durante l'aggiornamento dell'autoclave");
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
      <h1 className="text-2xl font-bold">Modifica Autoclave</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="es. Autoclave 1"
            disabled={isSaving}
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width">Larghezza (mm) *</Label>
            <Input
              id="width"
              type="number"
              value={form.width}
              onChange={(e) => handleChange("width", e.target.value)}
              placeholder="0"
              disabled={isSaving}
            />
            {errors.width && <p className="text-sm text-red-600">{errors.width}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Altezza (mm) *</Label>
            <Input
              id="height"
              type="number"
              value={form.height}
              onChange={(e) => handleChange("height", e.target.value)}
              placeholder="0"
              disabled={isSaving}
            />
            {errors.height && <p className="text-sm text-red-600">{errors.height}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="depth">Profondità (mm) *</Label>
            <Input
              id="depth"
              type="number"
              value={form.depth}
              onChange={(e) => handleChange("depth", e.target.value)}
              placeholder="0"
              disabled={isSaving}
            />
            {errors.depth && <p className="text-sm text-red-600">{errors.depth}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="num_vacuum_lines">Linee Vuoto</Label>
            <Input
              id="num_vacuum_lines"
              type="number"
              value={form.num_vacuum_lines}
              onChange={(e) => handleChange("num_vacuum_lines", e.target.value)}
              placeholder="0"
              disabled={isSaving}
            />
            {errors.num_vacuum_lines && (
              <p className="text-sm text-red-600">{errors.num_vacuum_lines}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2 pt-4">
          <Checkbox
            id="is_available"
            checked={form.is_available}
            onCheckedChange={(checked) => handleChange("is_available", checked as boolean)}
            disabled={isSaving}
          />
          <Label htmlFor="is_available">Disponibile</Label>
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