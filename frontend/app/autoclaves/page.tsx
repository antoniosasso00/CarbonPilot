"use client";

import { useEffect, useState } from "react";
import { getAutoclaves } from "@/lib/api";
import { Autoclave } from "@/types/autoclave";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AutoclavesPage() {
  const [autoclaves, setAutoclaves] = useState<Autoclave[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAutoclaves()
      .then(setAutoclaves)
      .catch((err) => {
        console.error(err);
        setError("Errore nel caricamento delle autoclavi.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Autoclavi Disponibili</h1>
        <Link href="/autoclaves/new">
          <Button>+ Nuova Autoclave</Button>
        </Link>
      </div>

      {loading && <p className="text-gray-500">Caricamento...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md text-sm">
            <thead className="bg-gray-100 text-left font-medium">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Nome</th>
                <th className="p-3">Dimensioni (mm)</th>
                <th className="p-3">Valvole</th>
                <th className="p-3">Linee Vuoto</th>
              </tr>
            </thead>
            <tbody>
              {autoclaves.map((a) => (
                <tr key={a.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{a.id}</td>
                  <td className="p-3">{a.name}</td>
                  <td className="p-3">
                    {a.width} × {a.height}
                  </td>
                  <td className="p-3">{a.num_vacuum_lines}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
