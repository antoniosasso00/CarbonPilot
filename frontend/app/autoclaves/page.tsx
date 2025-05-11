"use client";

import { useEffect, useState } from "react";
import { getAutoclaves } from "@/lib/api";
import { Autoclave } from "@/types/autoclave";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AutoclavesPage() {
  const [autoclaves, setAutoclaves] = useState<Autoclave[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAutoclaves = async () => {
      try {
        const data = await getAutoclaves();
        setAutoclaves(data);
      } catch (error) {
        console.error(error);
        toast.error("Errore nel caricamento delle autoclavi");
      } finally {
        setIsLoading(false);
      }
    };

    loadAutoclaves();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Autoclavi</h1>
        <Link href="/autoclaves/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nuova Autoclave
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {autoclaves.map((autoclave: any) => (
          <Card key={autoclave.id}>
            <CardHeader>
              <CardTitle>{autoclave.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{autoclave.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Dimensioni:</span>
                    <br />
                    {autoclave.width} x {autoclave.height} mm
                  </div>
                  <div>
                    <span className="font-medium">Temperatura Max:</span>
                    <br />
                    {autoclave.max_temperature}°C
                  </div>
                  <div>
                    <span className="font-medium">Pressione Max:</span>
                    <br />
                    {autoclave.max_pressure} bar
                  </div>
                  <div>
                    <span className="font-medium">Stato:</span>
                    <br />
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        autoclave.status === "available"
                          ? "bg-green-100 text-green-800"
                          : autoclave.status === "busy"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {autoclave.status === "available"
                        ? "Disponibile"
                        : autoclave.status === "busy"
                        ? "Occupata"
                        : "Manutenzione"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Link href={`/autoclaves/${autoclave.id}/edit`}>
                  <Button variant="outline" size="sm">
                    Modifica
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
