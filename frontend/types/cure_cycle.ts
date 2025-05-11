export type TemperaturePoint = {
  time: number;  // minuti dall'inizio
  temp: number;  // °C
};

export type PressurePoint = {
  time: number;  // minuti dall'inizio
  pressure: number;  // bar
};

export type VacuumPoint = {
  time: number;  // minuti dall'inizio
  vacuum: number;  // bar (negativo)
};

export type CureCycle = {
  id: number;
  name: string;
  description?: string;
  temperature_profile: TemperaturePoint[];
  pressure_profile: PressurePoint[];
  vacuum_profile: VacuumPoint[];
  total_time: number;  // minuti
  created_at: string;
  updated_at?: string;
};

export type CureCycleInput = {
  name: string;
  description?: string;
  temperature_profile: TemperaturePoint[];
  pressure_profile: PressurePoint[];
  vacuum_profile: VacuumPoint[];
  total_time: number;
}; 