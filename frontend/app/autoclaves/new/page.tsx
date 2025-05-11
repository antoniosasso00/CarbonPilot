"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function NewAutoclavePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    width: "",
    height: "",
    max_temperature: "",
    max_pressure: "",
    status: "available"
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/v1/autoclaves", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          width: parseFloat(formData.width),
          height: parseFloat(formData.height),
          max_temperature: parseFloat(formData.max_temperature),
          max_pressure: parseFloat(formData.max_pressure)
        }),
      });

      if (response.ok) {
        toast.success("Autoclave creata con successo");
        router.push("/autoclaves");
        router.refresh();
      } else {
        console.error("Error creating autoclave");
      }
    } catch (error) {
      toast.error("Errore durante la creazione dell'autoclave");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData(prev => ({ ...prev, status: value }));
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Nuova Autoclave</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="AUTO-01"
              />
            </div>

            <div>
              <Label htmlFor="description">Descrizione</Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Autoclave principale"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="width">Larghezza (mm)</Label>
                <Input
                  id="width"
                  name="width"
                  type="number"
                  value={formData.width}
                  onChange={handleChange}
                  required
                  min={0}
                  placeholder="3000"
                />
              </div>

              <div>
                <Label htmlFor="height">Altezza (mm)</Label>
                <Input
                  id="height"
                  name="height"
                  type="number"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  min={0}
                  placeholder="1500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="max_temperature">Temperatura Max (°C)</Label>
                <Input
                  id="max_temperature"
                  name="max_temperature"
                  type="number"
                  value={formData.max_temperature}
                  onChange={handleChange}
                  required
                  min={0}
                  placeholder="180"
                />
              </div>

              <div>
                <Label htmlFor="max_pressure">Pressione Max (bar)</Label>
                <Input
                  id="max_pressure"
                  name="max_pressure"
                  type="number"
                  value={formData.max_pressure}
                  onChange={handleChange}
                  required
                  min={0}
                  placeholder="7"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="status">Stato</Label>
              <Select value={formData.status} onValueChange={handleStatusChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleziona uno stato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Disponibile</SelectItem>
                  <SelectItem value="busy">Occupata</SelectItem>
                  <SelectItem value="maintenance">Manutenzione</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Creazione..." : "Crea Autoclave"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
