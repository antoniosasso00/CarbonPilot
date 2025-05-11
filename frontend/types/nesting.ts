export type NestingResult = {
  id: number;
  layout_id: number;
  autoclave_id: number;
  part_ids: number[];
  width_used: number;
  height_used: number;
  efficiency: number;
  parts: {
    id: number;
    part_number: string;
    x: number;
    y: number;
    rotated: boolean;
    width: number;
    height: number;
  }[];
  created_at: string;
};
