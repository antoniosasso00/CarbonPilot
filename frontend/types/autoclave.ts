export type AutoclaveStatus = 
  | "available"
  | "busy"
  | "maintenance";

export type ValveConfiguration = {
  vacuum_lines: number;
  pressure_sensors: number;
  temperature_sensors: number;
};

export type ScheduleInfo = {
  id: number;
  start_date: string;
  end_date: string;
  status: string;
  part_id: number;
};

export type NestingInfo = {
  id: number;
  created_at: string;
  efficiency: number;
  container_width: number;
  container_height: number;
};

export type CureCycleInfo = {
  id: number;
  name: string;
  description?: string;
  total_time: number;
};

export type Autoclave = {
  id: number;
  name: string;
  description?: string;
  
  // Dimensioni fisiche
  width: number;
  height: number;
  depth: number;
  
  // Caratteristiche tecniche
  max_temperature: number;
  max_pressure: number;
  num_vacuum_lines: number;
  valve_configuration?: ValveConfiguration;
  
  // Stato operativo
  status: AutoclaveStatus;
  is_available: boolean;
  maintenance_notes?: string;
  last_maintenance?: string;
  
  // Relazioni
  schedules: ScheduleInfo[];
  nesting_results: NestingInfo[];
  supported_cycles: CureCycleInfo[];
};

/** Tipo usato per la creazione */
export type AutoclaveInput = {
  name: string;
  description?: string;
  width: number;
  height: number;
  depth: number;
  max_temperature: number;
  max_pressure: number;
  num_vacuum_lines?: number;
  valve_configuration?: ValveConfiguration;
  status?: AutoclaveStatus;
  is_available?: boolean;
  maintenance_notes?: string;
  last_maintenance?: string;
  supported_cycles?: string[];
};
