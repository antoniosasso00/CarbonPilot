"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getParts } from "@/lib/api";
import { Part } from "@/types/part";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

const STATUS_LABELS: Record<string, string> = {
  pending: "In Attesa",
  ready: "Pronta",
  in_progress: "In Lavorazione",
  completed: "Completata",
  rejected: "Rifiutata",
};

export default function PartsPage() {
  const [parts, setParts] = useState<Part[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadParts = async () => {
      try {
        const data = await getParts();
        setParts(data);
      } catch (error) {
        console.error("Errore nel caricamento parti:", error);
        toast.error("Impossibile caricare le parti");
      } finally {
        setIsLoading(false);
      }
    };

    loadParts();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Elenco Parti</h1>
        <Link href="/parts/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuova Parte
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Stato</TableHead>
                <TableHead>Larghezza</TableHead>
                <TableHead>Altezza</TableHead>
                <TableHead>Ciclo</TableHead>
                <TableHead>Valvole</TableHead>
                <TableHead>Laminazione</TableHead>
                <TableHead className="text-right">Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                    Nessuna parte trovata
                  </TableCell>
                </TableRow>
              ) : (
                parts.map((part) => (
                  <TableRow key={part.id}>
                    <TableCell className="font-medium">{part.id}</TableCell>
                    <TableCell className="font-mono">{part.name}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          part.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : part.status === "ready"
                            ? "bg-blue-100 text-blue-800"
                            : part.status === "in_progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {STATUS_LABELS[part.status] || part.status}
                      </span>
                    </TableCell>
                    <TableCell>{part.catalog_part.width ? `${part.catalog_part.width} mm` : "-"}</TableCell>
                    <TableCell>{part.catalog_part.height ? `${part.catalog_part.height} mm` : "-"}</TableCell>
                    <TableCell>{part.cycle_code || "-"}</TableCell>
                    <TableCell>{part.valves_required ?? "-"}</TableCell>
                    <TableCell>{part.lamination_time ? `${part.lamination_time} min` : "-"}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/parts/${part.id}/edit`}>
                        <Button variant="outline" size="sm">
                          Modifica
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
