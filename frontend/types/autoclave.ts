export type Autoclave = {
    id: number;
    name: string;
    width: number;
    height: number;
    depth: number;
    num_vacuum_lines: number;
    is_available: boolean;
  };
  
  export type AutoclaveInput = Omit<Autoclave, "id">;
  