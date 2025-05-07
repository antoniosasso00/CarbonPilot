// frontend/lib/api.ts

import { Part, PartInput } from "@/types/part";
import { Schedule } from "@/types/schedule";
import { Autoclave, AutoclaveInput } from "@/types/autoclave";
import { CatalogPart, CatalogPartInput } from "@/types/catalog_part";
import { NestingResult } from "@/types/nesting";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/* ================================
   📦 API - Parts
================================ */

export async function getParts(): Promise<Part[]> {
  const res = await fetch(`${BASE_URL}/parts`);
  if (!res.ok) throw new Error("Errore nel recupero parti");
  return res.json();
}

export async function createPart(data: PartInput): Promise<Part> {
  const res = await fetch(`${BASE_URL}/parts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nella creazione parte");
  return res.json();
}

/* ================================
   📅 API - Schedules
================================ */

export async function getSchedules(): Promise<Schedule[]> {
  const res = await fetch(`${BASE_URL}/schedules`);
  if (!res.ok) throw new Error("Errore nel recupero schedule");
  return res.json();
}

/* ================================
   🏭 API - Autoclaves
================================ */

export async function getAutoclaves(): Promise<Autoclave[]> {
  const res = await fetch(`${BASE_URL}/autoclaves`);
  if (!res.ok) throw new Error("Errore nel recupero autoclavi");
  return res.json();
}

export async function createAutoclave(data: AutoclaveInput): Promise<Autoclave> {
  const res = await fetch(`${BASE_URL}/autoclaves`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nella creazione autoclave");
  return res.json();
}

/* ================================
   🧾 API - Catalog Parts
================================ */

export async function getCatalogParts(): Promise<CatalogPart[]> {
  const res = await fetch(`${BASE_URL}/catalog`);
  if (!res.ok) throw new Error("Errore nel recupero catalogo");
  return res.json();
}

export async function createCatalogPart(data: CatalogPartInput): Promise<CatalogPart> {
  const res = await fetch(`${BASE_URL}/catalog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nella creazione voce catalogo");
  return res.json();
}

/* ================================
   🧠 API - Nesting
================================ */

export async function getNestingResults(): Promise<NestingResult[]> {
  const res = await fetch(`${BASE_URL}/nesting`);
  if (!res.ok) throw new Error("Errore nel caricamento nesting");
  return res.json();
}

export async function runNesting(partIds: number[], autoclaveId: number): Promise<NestingResult> {
  const res = await fetch(`${BASE_URL}/nesting`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ part_ids: partIds, autoclave_id: autoclaveId }),
  });
  if (!res.ok) throw new Error("Errore durante il nesting");
  return res.json();
}

/* ================================
   🔘 Bottone “📄 Scarica PDF”
================================ */

export async function downloadNestingPDF(layout: NestingResult): Promise<Blob> {
  const res = await fetch(`${BASE_URL}/nesting/report`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(layout),
  });
  if (!res.ok) throw new Error("Errore nel download del PDF");
  return res.blob();
}

export async function getPartById(id: number): Promise<Part> {
  const res = await fetch(`${BASE_URL}/parts/${id}`);
  if (!res.ok) throw new Error("Errore nel recupero parte");
  return res.json();
}
