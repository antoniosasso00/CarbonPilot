export type NestingResult = {
    layout_id: number;
    autoclave_id: number;
    part_ids: number[];
    width_used: number;
    height_used: number;
    parts: {
      id: number;
      x: number;
      y: number;
      rotated: boolean;
      width: number;
      height: number;
    }[];
    created_at: string; // ISO timestamp
  };
  