import { Part } from "@/types/part";

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
