export type CureCycle = {
  code: string;
  description?: string;
  duration_min: number;
};

export type Autoclave = {
  id: number;
  name: string;
  width: number;
  height: number;
  depth: number;
  num_vacuum_lines: number;
  is_available: boolean;
  supported_cycles: CureCycle[]; // ✅ aggiunto
};

/** Tipo usato per la creazione, allineato con AutoclaveCreate */
export type AutoclaveInput = {
  name: string;
  width: number;
  height: number;
  depth: number;
  num_vacuum_lines: number;
  is_available: boolean;
  supported_cycles?: string[]; // ✅ opzionale in input (codici ciclo)
};
