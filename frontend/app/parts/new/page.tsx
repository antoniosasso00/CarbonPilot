"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ✅ Form per creazione nuova parte
export default function NewPartPage() {
  const router = useRouter();

  const [partNumber, setPartNumber] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!partNumber || !status) {
      setError("Compila tutti i campi.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/parts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ part_number: partNumber, status }),
      });

      if (!response.ok) throw new Error("Errore nella creazione della parte.");

      router.push("/parts"); // ✅ Redirect dopo creazione
    } catch (err) {
      console.error(err);
      setError("Errore durante la creazione. Riprova.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Nuova Parte</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="partNumber">Part Number</Label>
          <Input
            id="partNumber"
            value={partNumber}
            onChange={(e) => setPartNumber(e.target.value)}
            placeholder="es. CP-00123"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Stato</Label>
          <Input
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="es. in attesa, laminata..."
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="pt-2">
          <Button type="submit">Salva</Button>
        </div>
      </form>
    </div>
  );
}
