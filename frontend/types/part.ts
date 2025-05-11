export type Part = {
  id: number;
  part_number: string;
  description?: string;
  width: number;
  height: number;
  status: string; // oppure: 'created' | 'laminating' | 'ready' | 'autoclaved'
  source_catalog_id?: number;
  valves_required: number;
  cycle_code?: string;
  lamination_time?: number; // ✅ aggiunto
};

/** Tipo usato per la creazione, senza ID */
export type PartInput = Omit<Part, "id">;
