"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPartById } from "@/lib/api";
import { Part } from "@/types/part";

export default function PartDetailPage() {
  const params = useParams();
  const id = Number(params?.id);

  const [part, setPart] = useState<Part | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isNaN(id)) {
      setError("ID non valido.");
      return;
    }

    getPartById(id)
      .then(setPart)
      .catch((err) => {
        console.error("Errore nel caricamento parte:", err);
        setError("Impossibile caricare i dettagli della parte.");
      });
  }, [id]);

  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!part) return <div className="p-6">Caricamento...</div>;

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl font-bold">Dettaglio Parte #{part.id}</h1>
      <p><strong>Nome:</strong> {part.name}</p>
      <p><strong>Stato:</strong> {part.status}</p>
      <p><strong>Larghezza:</strong> {part.catalog_part.width} mm</p>
      <p><strong>Altezza:</strong> {part.catalog_part.height} mm</p>
      {part.cycle_code && <p><strong>Ciclo:</strong> {part.cycle_code}</p>}
    </div>
  );
}
