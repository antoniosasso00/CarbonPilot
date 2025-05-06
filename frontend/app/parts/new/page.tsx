"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewPartPage() {
  const router = useRouter();

  const [partNumber, setPartNumber] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/parts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        part_number: partNumber,
        width: parseFloat(width),
        height: parseFloat(height),
        status: "created",
      }),
    });

    if (res.ok) {
      router.push("/parts");
    } else {
      alert("Errore nella creazione della parte");
    }
  };

  return (
    <div className="p-6 max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Nuova Parte</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="partNumber">Part Number</Label>
          <Input
            id="partNumber"
            value={partNumber}
            onChange={(e) => setPartNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="width">Larghezza (mm)</Label>
          <Input
            id="width"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="height">Altezza (mm)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Crea Parte</Button>
      </form>
    </div>
  );
}
