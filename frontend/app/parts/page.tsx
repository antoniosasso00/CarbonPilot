"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Part = {
  id: number;
  part_number: string;
  status: string;
};

export default function PartsPage() {
  const [parts, setParts] = useState<Part[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data))
      .catch((err) => console.error("Errore nel caricamento parti:", err));
  }, []);

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Elenco Parti</h1>
        <Link href="/parts/new">
          <Button>+ Nuova Parte</Button>
        </Link>
      </div>

      <table className="w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Part Number</th>
            <th className="p-2">Stato</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id} className="border-t hover:bg-gray-50">
              <td className="p-2">{part.id}</td>
              <td className="p-2">{part.part_number}</td>
              <td className="p-2">{part.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
