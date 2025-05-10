export type Schedule = {
  id: number;
  autoclave_id: number;
  description?: string;
  layout_id?: string;
  color?: string;
  start_time: string;
  end_time: string;
  part_ids: number[];
};

/** Tipo usato per la creazione, senza ID */
export type ScheduleInput = Omit<Schedule, "id">;
