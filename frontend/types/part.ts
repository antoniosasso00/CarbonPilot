export type PartStatus = 
  | "pending"
  | "ready"
  | "in_progress"
  | "completed"
  | "rejected";

export type CatalogPartInfo = {
  id: number;
  name: string;
  material: string;
  width: number;
  height: number;
  thickness: number;
};

export type ScheduleInfo = {
  id: number;
  start_date: string;
  end_date: string;
  status: string;
  autoclave_id: number;
};

export type NestingInfo = {
  id: number;
  created_at: string;
  efficiency: number;
  container_width: number;
  container_height: number;
};

export type Part = {
  id: number;
  name: string;
  description?: string;
  catalog_part_id: number;
  status: PartStatus;
  priority: number;
  
  // Campi tecnici
  valves_required: number;
  lamination_time?: number;
  cycle_code?: string;
  
  // Relazioni
  catalog_part: CatalogPartInfo;
  schedules: ScheduleInfo[];
  nesting_results: NestingInfo[];
};

/** Tipo usato per la creazione/aggiornamento */
export type PartInput = {
  name: string;
  description?: string;
  catalog_part_id: number;
  status?: PartStatus;
  priority?: number;
  valves_required?: number;
  lamination_time?: number;
  cycle_code?: string;
};
