export type Autoclave = {
  id: number;
  name: string;
  width: number;
  height: number;
  depth: number;
  num_vacuum_lines: number;
  is_available: boolean;
};

export type AutoclaveInput = {
  name: string;
  width_mm: number;
  height_mm: number;
  num_valves: number;
  num_vacuum_lines: number;
};
