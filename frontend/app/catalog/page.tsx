"use client";

import { useEffect, useState } from "react";
import { getCatalogParts } from "@/lib/api";
import { CatalogPart } from "@/types/catalog_part";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

export default function CatalogPage() {
  const [catalog, setCatalog] = useState<CatalogPart[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCatalog = async () => {
      try {
        const data = await getCatalogParts();
        setCatalog(data);
      } catch (error) {
        console.error(error);
        toast.error("Errore nel caricamento del catalogo");
      } finally {
        setIsLoading(false);
      }
    };

    loadCatalog();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Catalogo Parti</h1>
        <Link href="/catalog/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuova Voce Catalogo
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
                <TableHead>Part Number</TableHead>
                <TableHead>Lunghezza</TableHead>
                <TableHead>Larghezza</TableHead>
                <TableHead>Ciclo</TableHead>
                <TableHead className="text-right">Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {catalog.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    Nessuna voce catalogo trovata
                  </TableCell>
                </TableRow>
              ) : (
                catalog.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell className="font-mono">{item.code}</TableCell>
                    <TableCell>{item.default_height ? `${item.default_height} mm` : "-"}</TableCell>
                    <TableCell>{item.default_width ? `${item.default_width} mm` : "-"}</TableCell>
                    <TableCell>{item.default_cycle_code || "-"}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/catalog/${item.id}/edit`}>
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
