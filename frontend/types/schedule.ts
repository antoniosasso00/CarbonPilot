export type Schedule = {
  id: number;
  autoclave_id: number;
  description?: string;
  nesting_layout_id?: number;
  color?: string;
  start_time: string;
  end_time: string;
  parts: Array<{
    id: number;
    part_number: string;
    status: string;
  }>;
};

export type ScheduleInput = {
  autoclave_id: number;
  description?: string;
  nesting_layout_id?: number;
  color?: string;
  start_time: string;
  part_ids: number[];
};
