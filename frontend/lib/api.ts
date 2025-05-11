import { Part, PartInput } from "@/types/part";
import { Schedule, ScheduleInput } from "@/types/schedule";
import { Autoclave, AutoclaveInput } from "@/types/autoclave";
import { CatalogPart, CatalogPartInput } from "@/types/catalog_part";
import { NestingResult } from "@/types/nesting";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/* ========== 📦 PARTS ========== */
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

export async function getPartById(id: number): Promise<Part> {
  const res = await fetch(`${BASE_URL}/parts/${id}`);
  if (!res.ok) throw new Error("Errore nel recupero parte");
  return res.json();
}

export async function updatePart(id: number, data: PartInput): Promise<Part> {
  const res = await fetch(`${BASE_URL}/parts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nell'aggiornamento parte");
  return res.json();
}

/* ========== 📅 SCHEDULES ========== */
export async function getSchedules(): Promise<Schedule[]> {
  const res = await fetch(`${BASE_URL}/schedules`);
  if (!res.ok) throw new Error("Errore nel recupero schedule");
  return res.json();
}

export async function getScheduleById(id: number): Promise<Schedule> {
  const res = await fetch(`${BASE_URL}/schedules/${id}`);
  if (!res.ok) throw new Error("Errore nel recupero schedule");
  return res.json();
}

export async function createSchedule(data: ScheduleInput): Promise<Schedule> {
  const res = await fetch(`${BASE_URL}/schedules`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nella creazione pianificazione");
  return res.json();
}

export async function updateSchedule(id: number, data: ScheduleInput): Promise<Schedule> {
  const res = await fetch(`${BASE_URL}/schedules/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nell'aggiornamento pianificazione");
  return res.json();
}

/* ========== 🏭 AUTOCLAVES ========== */
export async function getAutoclaves(): Promise<Autoclave[]> {
  const res = await fetch(`${BASE_URL}/autoclaves`);
  if (!res.ok) throw new Error("Errore nel recupero autoclavi");
  return res.json();
}

export async function getAutoclaveById(id: number): Promise<Autoclave> {
  const res = await fetch(`${BASE_URL}/autoclaves/${id}`);
  if (!res.ok) throw new Error("Errore nel recupero autoclave");
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

export async function updateAutoclave(id: number, data: AutoclaveInput): Promise<Autoclave> {
  const res = await fetch(`${BASE_URL}/autoclaves/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nell'aggiornamento autoclave");
  return res.json();
}

/* ========== 🧾 CATALOG PARTS ========== */
export async function getCatalogParts(): Promise<CatalogPart[]> {
  const res = await fetch(`${BASE_URL}/catalog_parts`);
  if (!res.ok) throw new Error("Errore nel recupero catalogo");
  return res.json();
}

export async function getCatalogPartById(id: number): Promise<CatalogPart> {
  const res = await fetch(`${BASE_URL}/catalog_parts/${id}`);
  if (!res.ok) throw new Error("Errore nel recupero voce catalogo");
  return res.json();
}

export async function createCatalogPart(data: CatalogPartInput): Promise<CatalogPart> {
  const res = await fetch(`${BASE_URL}/catalog_parts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nella creazione voce catalogo");
  return res.json();
}

/* ========== 🧠 NESTING ========== */
export async function runNesting(partIds: number[], autoclaveId: number): Promise<NestingResult> {
  const res = await fetch(`${BASE_URL}/nesting`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ part_ids: partIds, autoclave_id: autoclaveId }),
  });
  if (!res.ok) throw new Error("Errore durante il nesting");
  return res.json();
}

export async function downloadNestingPDF(layoutId: number): Promise<Blob> {
  const res = await fetch(`${BASE_URL}/nesting/report`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ layout_id: layoutId }),
  });
  if (!res.ok) throw new Error("Errore nel download del PDF");
  return res.blob();
}

export async function getNestingResults(): Promise<NestingResult[]> {
  const res = await fetch(`${BASE_URL}/nesting`);
  if (!res.ok) throw new Error("Errore nel caricamento nesting");
  return res.json();
}
