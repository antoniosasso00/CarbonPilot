"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getParts } from "@/lib/api";
import { Part } from "@/types/part";

export default function PartsPage() {
  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getParts()
      .then((data) => setParts(data))
      .catch((err) => {
        console.error("Errore nel caricamento parti:", err);
        setError("Impossibile caricare le parti.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Elenco Parti</h1>
        <Link href="/parts/new">
          <Button>+ Nuova Parte</Button>
        </Link>
      </div>

      {loading && <p className="text-gray-500">Caricamento in corso...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md">
            <thead className="bg-muted text-left text-sm font-semibold text-gray-700">
              <tr>
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Part Number</th>
                <th className="p-3 border-b">Stato</th>
                <th className="p-3 border-b">Larghezza</th>
                <th className="p-3 border-b">Altezza</th>
                <th className="p-3 border-b">Ciclo</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part) => (
                <tr key={part.id} className="border-b hover:bg-gray-50 text-sm">
                  <td className="p-3">{part.id}</td>
                  <td className="p-3 font-mono">{part.part_number}</td>
                  <td className="p-3">{part.status}</td>
                  <td className="p-3">{part.width ?? "-"}</td>
                  <td className="p-3">{part.height ?? "-"}</td>
                  <td className="p-3">{part.cycle_code ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
