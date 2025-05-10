// ... importazioni (ok)

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/* ========== 📦 PARTS ========== */
export async function getParts(): Promise<Part[]> {
  const res = await fetch(`${BASE_URL}/parts`);
  if (!res.ok) throw new Error("Errore nel recupero parti");
  return res.json();
}
export async function createPart(data: PartInput): Promise<Part> { /* ... */ }
export async function getPartById(id: number): Promise<Part> { /* ... */ }
export async function updatePart(id: number, data: PartInput): Promise<Part> { /* ... */ }

/* ========== 📅 SCHEDULES ========== */
export async function getSchedules(): Promise<Schedule[]> { /* ... */ }
export async function createSchedule(data: ScheduleInput): Promise<Schedule> { /* ... */ }

/* ========== 🏭 AUTOCLAVES ========== */
export async function getAutoclaves(): Promise<Autoclave[]> { /* ... */ }
export async function createAutoclave(data: AutoclaveInput): Promise<Autoclave> { /* ... */ }

/* ========== 🧾 CATALOG PARTS ========== */
export async function getCatalogParts(): Promise<CatalogPart[]> { /* ... */ }
export async function createCatalogPart(data: CatalogPartInput): Promise<CatalogPart> { /* ... */ }

/* ========== 🧠 NESTING ========== */
export async function runNesting(partIds: number[], autoclaveId: number): Promise<NestingResult> { /* ... */ }

export async function downloadNestingPDF(layoutId: number): Promise<Blob> {
  const res = await fetch(`${BASE_URL}/nesting/report`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ layout_id: layoutId }),
  });
  if (!res.ok) throw new Error("Errore nel download del PDF");
  return res.blob();
}

// (facoltativo) recupera gli ultimi layout:
export async function getNestingResults(): Promise<NestingResult[]> {
  const res = await fetch(`${BASE_URL}/nesting`);
  if (!res.ok) throw new Error("Errore nel caricamento nesting");
  return res.json();
}
