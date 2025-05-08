export type Part = {
  id: number;
  part_number: string;
  status: string;
  width?: number;
  height?: number;
  cycle_code?: string;
};

export type PartInput = Omit<Part, "id">;

