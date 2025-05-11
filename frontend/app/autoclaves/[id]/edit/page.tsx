"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AutoclaveInput, AutoclaveStatus } from '@/types/autoclave';
import { updateAutoclave, getAutoclaveById } from '@/lib/api';
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface PageProps {
  params: {
    id: string;
  };
}

interface FormErrors {
  name?: string;
  description?: string;
  width?: string;
  height?: string;
  depth?: string;
  max_temperature?: string;
  max_pressure?: string;
  num_vacuum_lines?: string;
  status?: string;
  is_available?: string;
  maintenance_notes?: string;
  last_maintenance?: string;
  valve_configuration?: string;
  supported_cycles?: string;
}

export default function EditAutoclavePage({ params }: PageProps) {
  const router = useRouter();
  const id = Number(params.id);

  const [form, setForm] = useState<AutoclaveInput>({
    name: "",
    description: "",
    width: 0,
    height: 0,
    depth: 0,
    max_temperature: 0,
    max_pressure: 0,
    num_vacuum_lines: 2,
    status: "available",
    is_available: true,
    maintenance_notes: "",
    last_maintenance: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const fetchAutoclave = async () => {
      try {
        const data = await getAutoclaveById(id);
        setForm({
          name: data.name,
          description: data.description || "",
          width: data.width,
          height: data.height,
          depth: data.depth,
          max_temperature: data.max_temperature,
          max_pressure: data.max_pressure,
          num_vacuum_lines: data.num_vacuum_lines || 2,
          status: data.status,
          is_available: data.is_available,
          maintenance_notes: data.maintenance_notes || "",
          last_maintenance: data.last_maintenance || ""
        });
      } catch (error) {
        console.error(error);
        toast.error("Errore nel recupero dei dati dell'autoclave");
        router.push("/autoclaves");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAutoclave();
  }, [id, router]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
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

    if (form.max_temperature <= 0) {
      newErrors.max_temperature = "La temperatura massima deve essere maggiore di zero";
    }

    if (form.max_pressure <= 0) {
      newErrors.max_pressure = "La pressione massima deve essere maggiore di zero";
    }

    const numVacuumLines = form.num_vacuum_lines || 2;
    if (numVacuumLines <= 0) {
      newErrors.num_vacuum_lines = "Il numero di linee vuoto deve essere maggiore di zero";
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
          : field === "status"
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Modifica Autoclave</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nome:</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="border p-2 w-full"
            required
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-2">Descrizione:</label>
          <textarea
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="border p-2 w-full"
            rows={3}
          />
        </div>
        <div>
          <label className="block mb-2">Larghezza (mm):</label>
          <input
            type="number"
            value={form.width}
            onChange={(e) => handleChange("width", e.target.value)}
            className="border p-2 w-full"
            required
          />
          {errors.width && <p className="text-sm text-red-600">{errors.width}</p>}
        </div>
        <div>
          <label className="block mb-2">Altezza (mm):</label>
          <input
            type="number"
            value={form.height}
            onChange={(e) => handleChange("height", e.target.value)}
            className="border p-2 w-full"
            required
          />
          {errors.height && <p className="text-sm text-red-600">{errors.height}</p>}
        </div>
        <div>
          <label className="block mb-2">Profondità (mm):</label>
          <input
            type="number"
            value={form.depth}
            onChange={(e) => handleChange("depth", e.target.value)}
            className="border p-2 w-full"
            required
          />
          {errors.depth && <p className="text-sm text-red-600">{errors.depth}</p>}
        </div>
        <div>
          <label className="block mb-2">Temperatura Massima (°C):</label>
          <input
            type="number"
            value={form.max_temperature}
            onChange={(e) => handleChange("max_temperature", e.target.value)}
            className="border p-2 w-full"
            required
          />
          {errors.max_temperature && <p className="text-sm text-red-600">{errors.max_temperature}</p>}
        </div>
        <div>
          <label className="block mb-2">Pressione Massima (bar):</label>
          <input
            type="number"
            value={form.max_pressure}
            onChange={(e) => handleChange("max_pressure", e.target.value)}
            className="border p-2 w-full"
            required
          />
          {errors.max_pressure && <p className="text-sm text-red-600">{errors.max_pressure}</p>}
        </div>
        <div>
          <label className="block mb-2">Numero Linee Vuoto:</label>
          <input
            type="number"
            value={form.num_vacuum_lines}
            onChange={(e) => handleChange("num_vacuum_lines", e.target.value)}
            className="border p-2 w-full"
            required
          />
          {errors.num_vacuum_lines && <p className="text-sm text-red-600">{errors.num_vacuum_lines}</p>}
        </div>
        <div>
          <label className="block mb-2">Stato:</label>
          <select
            value={form.status}
            onChange={(e) => handleChange("status", e.target.value as AutoclaveStatus)}
            className="border p-2 w-full"
            required
          >
            <option value="available">Disponibile</option>
            <option value="busy">Occupata</option>
            <option value="maintenance">In Manutenzione</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Disponibile:</label>
          <input
            type="checkbox"
            checked={form.is_available}
            onChange={(e) => handleChange("is_available", e.target.checked)}
            className="border p-2"
          />
          {errors.is_available && <p className="text-sm text-red-600">{errors.is_available}</p>}
        </div>
        <div>
          <label className="block mb-2">Note Manutenzione:</label>
          <textarea
            value={form.maintenance_notes}
            onChange={(e) => handleChange("maintenance_notes", e.target.value)}
            className="border p-2 w-full"
            rows={3}
          />
        </div>
        <div>
          <label className="block mb-2">Ultima Manutenzione:</label>
          <input
            type="date"
            value={form.last_maintenance}
            onChange={(e) => handleChange("last_maintenance", e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSaving ? "Salvataggio..." : "Salva Modifiche"}
        </button>
      </form>
    </div>
  );
} 