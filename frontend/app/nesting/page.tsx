"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getNestingResults, runNesting, getParts, getAutoclaves } from "@/lib/api";
import { NestingResult } from "@/types/nesting";
import { Part } from "@/types/part";
import { Autoclave } from "@/types/autoclave";
import NestingPreview from "@/components/nesting/NestingPreview";

export default function NestingPage() {
  const [results, setResults] = useState<NestingResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [parts, setParts] = useState<Part[]>([]);
  const [selectedParts, setSelectedParts] = useState<number[]>([]);
  const [autoclaves, setAutoclaves] = useState<Autoclave[]>([]);
  const [selectedAutoclave, setSelectedAutoclave] = useState<number | null>(null);

  useEffect(() => {
    getParts().then(setParts);
    getAutoclaves().then(setAutoclaves);
    getNestingResults().then(setResults);
  }, []);

  const togglePart = (id: number) => {
    setSelectedParts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleRun = async () => {
    if (!selectedAutoclave || selectedParts.length === 0) {
      setError("Seleziona almeno un'autoclave e una parte.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await runNesting(selectedParts, selectedAutoclave);
      const updated = await getNestingResults();
      setResults(updated);
    } catch (err) {
      console.error(err);
      setError("Errore durante il nesting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nesting Autoclave</h1>
        <Button onClick={handleRun}>Esegui Nesting</Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Seleziona Autoclave</h2>
          <select
            className="w-full border p-2 rounded-md"
            value={selectedAutoclave ?? ""}
            onChange={(e) => setSelectedAutoclave(Number(e.target.value))}
          >
            <option value="">-- Seleziona --</option>
            {autoclaves.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name} ({a.width_mm}×{a.height_mm})
              </option>
            ))}
          </select>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Seleziona Parti</h2>
          <ul className="border rounded-md max-h-56 overflow-y-auto p-2 space-y-1 text-sm">
            {parts.map((p) => (
              <li key={p.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedParts.includes(p.id)}
                  onChange={() => togglePart(p.id)}
                />
                {p.part_number} ({p.status})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {loading && <p className="text-gray-500">Elaborazione in corso...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading &&
        results.map((res) => (
          <NestingPreview key={res.layout_id} layout={res} />
        ))}
    </div>
  );
}
