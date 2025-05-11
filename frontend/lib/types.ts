// Tipi per le parti
export interface Part {
  id: number;
  catalog_part_id: number;
  status: string;
  priority: number;
  due_date: string;
}

export interface CatalogPart {
  id: number;
  name: string;
  material: string;
  length: number;
  width: number;
  thickness: number;
  cure_time: number;
}

// Tipi per le autoclavi
export enum AutoclaveStatus {
  AVAILABLE = "available",
  BUSY = "busy",
  MAINTENANCE = "maintenance"
}

export interface ValveConfiguration {
  vacuum_lines: {
    id: string;
    name: string;
    type: string;
    position: string;
  }[];
  pressure_sensors: {
    id: string;
    name: string;
    type: string;
    position: string;
  }[];
  temperature_sensors: {
    id: string;
    name: string;
    type: string;
    position: string;
  }[];
}

export interface Autoclave {
  id: number;
  name: string;
  description?: string;
  width: number;
  height: number;
  depth: number;
  max_temperature: number;
  max_pressure: number;
  num_vacuum_lines: number;
  valve_configuration?: ValveConfiguration;
  status: AutoclaveStatus;
  is_available: boolean;
  maintenance_notes?: string;
  last_maintenance?: string;
}

export interface AutoclaveInput {
  name: string;
  description?: string;
  width: number;
  height: number;
  depth: number;
  max_temperature: number;
  max_pressure: number;
  num_vacuum_lines: number;
  valve_configuration?: ValveConfiguration;
  status: AutoclaveStatus;
  is_available: boolean;
  maintenance_notes?: string;
  last_maintenance?: string;
}

// Tipi per i cicli di cura
export interface CureCycle {
  id: number;
  name: string;
  temperature_profile: string;
  pressure_profile: string;
  vacuum_profile: string;
  total_time: number;
}

// Tipi per il nesting
export interface NestingResult {
  id: number;
  layout_data: string;
  efficiency: number;
  created_at: string;
}

// Tipi per le schedule
export interface Schedule {
  id: number;
  autoclave_id: number;
  cure_cycle_id: number;
  nesting_result_id: number;
  start_time: string;
  end_time: string;
  status: string;
}

// Tipi per i report
export interface Report {
  id: number;
  schedule_id: number;
  data: string;
  created_at: string;
  type: string;
} 