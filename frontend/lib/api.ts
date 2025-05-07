import { Part } from "@/types/part";
import { Schedule } from "@/types/schedule";
import { Autoclave, AutoclaveInput } from "@/types/autoclave";
import { CatalogPart, CatalogPartInput } from "@/types/catalog_part";
import { NestingResult } from "@/types/nesting";

/* ================================
   📦 API - Parts
================================ */

export async function getParts(): Promise<Part[]> {
  const res = await fetch("http://localhost:8000/parts");
  if (!res.ok) throw new Error("Errore nel recupero parti");
  return res.json();
}

export async function createPart(part: Omit<Part, "id">): Promise<Part> {
  const res = await fetch("http://localhost:8000/parts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(part),
  });
  if (!res.ok) throw new Error("Errore nella creazione parte");
  return res.json();
}

/* ================================
   📅 API - Schedules
================================ */

export async function getSchedules(): Promise<Schedule[]> {
  const res = await fetch("http://localhost:8000/schedules");
  if (!res.ok) throw new Error("Errore nel recupero schedule");
  return res.json();
}

/* ================================
   🏭 API - Autoclaves
================================ */

export async function getAutoclaves(): Promise<Autoclave[]> {
  const res = await fetch("http://localhost:8000/autoclaves");
  if (!res.ok) throw new Error("Errore nel recupero autoclavi");
  return res.json();
}

export async function createAutoclave(data: AutoclaveInput): Promise<void> {
  const res = await fetch("http://localhost:8000/autoclaves", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nella creazione autoclave");
}

/* ================================
   🧾 API - Catalog Parts
================================ */

export async function getCatalogParts(): Promise<CatalogPart[]> {
  const res = await fetch("http://localhost:8000/catalog");
  if (!res.ok) throw new Error("Errore nel recupero catalogo");
  return res.json();
}

export async function createCatalogPart(data: CatalogPartInput): Promise<void> {
  const res = await fetch("http://localhost:8000/catalog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nella creazione voce catalogo");
}

/* ================================
   🧠 API - Nesting
================================ */

export async function getNestingResults(): Promise<NestingResult[]> {
  const res = await fetch("http://localhost:8000/nesting");
  if (!res.ok) throw new Error("Errore nel caricamento nesting");
  return res.json();
}

export async function runNesting(partIds: number[], autoclaveId: number): Promise<NestingResult> {
  const res = await fetch("http://localhost:8000/nesting", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ part_ids: partIds, autoclave_id: autoclaveId }),
  });
  if (!res.ok) throw new Error("Errore durante il nesting");
  return res.json();
}
