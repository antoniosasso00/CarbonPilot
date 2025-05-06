"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Part = {
  id: number;
  part_number: string;
  width: number;
  height: number;
  status: string;
  cycle_code?: string;
};

export default function PartDetailPage() {
  const { id } = useParams();
  const [part, setPart] = useState<Part | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data))
      .catch((err) => console.error("Errore nel caricamento parte:", err));
  }, [id]);

  if (!part) return <div className="p-6">Caricamento...</div>;

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl font-bold">Dettaglio Parte #{part.id}</h1>
      <p><strong>Part Number:</strong> {part.part_number}</p>
      <p><strong>Larghezza:</strong> {part.width} mm</p>
      <p><strong>Altezza:</strong> {part.height} mm</p>
      <p><strong>Stato:</strong> {part.status}</p>
      {part.cycle_code && <p><strong>Ciclo:</strong> {part.cycle_code}</p>}
    </div>
  );
}
