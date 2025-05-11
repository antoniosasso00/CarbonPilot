import { Part, PartInput } from "@/types/part";
import { Schedule, ScheduleInput } from "@/types/schedule";
import { Autoclave, AutoclaveInput, AutoclaveStatus } from "@/types/autoclave";
import { CatalogPart, CatalogPartInput } from "@/types/catalog_part";
import { NestingResult } from "@/types/nesting";
import { CureCycle, CureCycleInput } from "@/types/cure_cycle";

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

/* ========== 🌡️ CURE CYCLES ========== */
export async function getCureCycles(): Promise<CureCycle[]> {
  const res = await fetch(`${BASE_URL}/cure_cycles`);
  if (!res.ok) throw new Error("Errore nel recupero cicli di cura");
  return res.json();
}

export async function getCureCycleById(id: number): Promise<CureCycle> {
  const res = await fetch(`${BASE_URL}/cure_cycles/${id}`);
  if (!res.ok) throw new Error("Errore nel recupero ciclo di cura");
  return res.json();
}

export async function createCureCycle(data: CureCycleInput): Promise<CureCycle> {
  const res = await fetch(`${BASE_URL}/cure_cycles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Errore nella creazione ciclo di cura");
  return res.json();
}

/* ========== 🔄 AUTOCLAVE STATUS ========== */
export async function updateAutoclaveStatus(
  id: number,
  status: AutoclaveStatus,
  notes?: string
): Promise<Autoclave> {
  const res = await fetch(`${BASE_URL}/autoclaves/${id}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status, maintenance_notes: notes }),
  });
  if (!res.ok) throw new Error("Errore nell'aggiornamento stato autoclave");
  return res.json();
}

export async function getAutoclaveStatus(id: number): Promise<{
  status: AutoclaveStatus;
  is_available: boolean;
  maintenance_notes?: string;
  last_maintenance?: string;
}> {
  const res = await fetch(`${BASE_URL}/autoclaves/${id}/status`);
  if (!res.ok) throw new Error("Errore nel recupero stato autoclave");
  return res.json();
}

/* ========== 📊 REPORTS ========== */
export async function downloadScheduleReport(scheduleId: number): Promise<Blob> {
  const res = await fetch(`${BASE_URL}/reports/schedule/${scheduleId}`, {
    method: "GET",
    headers: { Accept: "application/pdf" },
  });
  if (!res.ok) throw new Error("Errore nel download del report pianificazione");
  return res.blob();
}

export async function downloadNestingReport(nestingId: number): Promise<Blob> {
  const res = await fetch(`${BASE_URL}/reports/nesting/${nestingId}`, {
    method: "GET",
    headers: { Accept: "application/pdf" },
  });
  if (!res.ok) throw new Error("Errore nel download del report nesting");
  return res.blob();
}

export async function getDashboardStats(): Promise<{
  total_parts: number;
  active_schedules: number;
  available_autoclaves: number;
  efficiency_stats: {
    avg_nesting_efficiency: number;
    avg_autoclave_utilization: number;
  };
}> {
  const res = await fetch(`${BASE_URL}/dashboard/stats`);
  if (!res.ok) throw new Error("Errore nel recupero statistiche dashboard");
  return res.json();
}

/* ========== 🔍 MONITORING ========== */
export async function getAutoclaveMonitoring(id: number): Promise<{
  temperature: number;
  pressure: number;
  vacuum_levels: number[];
  cycle_progress: number;
  estimated_completion: string;
}> {
  const res = await fetch(`${BASE_URL}/autoclaves/${id}/monitoring`);
  if (!res.ok) throw new Error("Errore nel recupero dati monitoraggio");
  return res.json();
}

export async function startAutoclaveCycle(
  id: number,
  scheduleId: number
): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${BASE_URL}/autoclaves/${id}/start_cycle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ schedule_id: scheduleId }),
  });
  if (!res.ok) throw new Error("Errore nell'avvio ciclo");
  return res.json();
}

export async function stopAutoclaveCycle(
  id: number,
  reason: string
): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${BASE_URL}/autoclaves/${id}/stop_cycle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reason }),
  });
  if (!res.ok) throw new Error("Errore nell'arresto ciclo");
  return res.json();
}
