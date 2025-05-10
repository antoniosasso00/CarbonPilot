export type Part = {
  id: number;
  part_number: string;
  description?: string;
  width: number;
  height: number;
  status: string;
  source_catalog_id: number;
  valves_required: number;
  cycle_code?: string;
};

/** Tipo usato per la creazione, senza ID */
export type PartInput = Omit<Part, "id">;
