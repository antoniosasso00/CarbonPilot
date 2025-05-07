import { Part } from "@/types/part";
import { Schedule } from "@/types/schedule";
import { Autoclave, AutoclaveInput } from "@/types/autoclave";

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
