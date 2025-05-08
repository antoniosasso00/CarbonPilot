export type Part = {
  id: number;
  part_number: string;
  status: string;
  width?: number;
  height?: number;
  cycle_code?: string;
  valves_required: number;
};

export type PartInput = Omit<Part, "id">;

