export type Autoclave = {
  id: number;
  name: string;
  width: number;
  height: number;
  depth: number;
  num_vacuum_lines: number;
  is_available: boolean;
};

/** Tipo usato per la creazione, allineato con AutoclaveCreate */
export type AutoclaveInput = {
  name: string;
  width_mm: number;
  height_mm: number;
  depth: number;
  num_vacuum_lines: number;
  is_available: boolean;
};
