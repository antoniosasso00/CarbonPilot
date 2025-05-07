export type CatalogPart = {
  id: number;
  part_number: string;
  length_mm: number;
  width_mm: number;
  thickness_mm: number;
  cure_cycle: string;
};

/** Tipo usato per la creazione, senza ID */
export type CatalogPartInput = Omit<CatalogPart, "id">;
