"use client";

import { useEffect, useState } from "react";
import { getCatalogParts } from "@/lib/api";
import { CatalogPart } from "@/types/catalog_part";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CatalogPage() {
  const [catalog, setCatalog] = useState<CatalogPart[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCatalogParts()
      .then(setCatalog)
      .catch((err) => {
        console.error(err);
        setError("Errore nel caricamento del catalogo.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Catalogo Parti</h1>
        <Link href="/catalog/new">
          <Button>+ Nuova Voce Catalogo</Button>
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
                <th className="p-3">Part Number</th>
                <th className="p-3">Lunghezza</th>
                <th className="p-3">Larghezza</th>
                <th className="p-3">Spessore</th>
                <th className="p-3">Ciclo</th>
              </tr>
            </thead>
            <tbody>
              {catalog.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.part_number}</td>
                  <td className="p-3">{item.length_mm} mm</td>
                  <td className="p-3">{item.width_mm} mm</td>
                  <td className="p-3">{item.thickness_mm} mm</td>
                  <td className="p-3">{item.cure_cycle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
