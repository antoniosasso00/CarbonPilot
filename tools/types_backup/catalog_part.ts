export type CatalogPart = {
  id: number;
  code: string;
  description?: string;
  default_width: number;
  default_height: number;
  default_cycle_code?: string;
};

/** Tipo usato per la creazione di una parte da catalogo (senza ID) */
export type CatalogPartInput = Omit<CatalogPart, "id">;
