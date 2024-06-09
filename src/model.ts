export interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

export interface PreciosHabitaciones {
  standard: number;
  suite: number;
}
