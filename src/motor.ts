import { PreciosHabitaciones, Reserva } from "./model";

class ClaseComun {
  reservas: Reserva[];
  preciosHabitaciones: PreciosHabitaciones;
  iva: number;
  cargoAdicionalPersona: number;
  cargoDesayunoPersona: number;
  constructor(
    reservas: Reserva[],
    preciosHabitaciones: PreciosHabitaciones,
    iva = 0.21
  ) {
    this.reservas = reservas;
    this.preciosHabitaciones = preciosHabitaciones;
    this.iva = iva;
    this.cargoAdicionalPersona = 40;
    this.cargoDesayunoPersona = 15;
  }

  calcularSubtotal() {
    return this.reservas.reduce((subtotal, reserva) => {
      const { tipoHabitacion, pax, noches, desayuno } = reserva;
      const precioInicial = this.preciosHabitaciones[tipoHabitacion];
      const precioPorPersonaAdicional =
        pax > 1 ? (pax - 1) * this.cargoAdicionalPersona : 0;
      const precioPorDesayuno = desayuno ? pax * this.cargoDesayunoPersona : 0;
      const precioTotalNoche =
        precioInicial + precioPorPersonaAdicional + precioPorDesayuno;
      return subtotal + precioTotalNoche * noches;
    }, 0);
  }

  calcularTotal() {
    const subtotal = this.calcularSubtotal();
    return subtotal * (1 + this.iva);
  }
}

class ClaseCasoParticular extends ClaseComun {
  constructor(reservas: Reserva[]) {
    const preciosHabitaciones = {
      standard: 100,
      suite: 150,
    };
    super(reservas, preciosHabitaciones);
  }
}

class ClaseCasoTourOperador extends ClaseComun {
  descuento: number;
  constructor(reservas: Reserva[]) {
    const preciosHabitaciones = {
      standard: 100,
      suite: 100,
    };
    super(reservas, preciosHabitaciones);
    this.descuento = 0.15;
  }

  calcularTotal() {
    const subtotal = this.calcularSubtotal();
    const totalConDescuento = subtotal * (1 - this.descuento);
    return totalConDescuento * (1 + this.iva);
  }
}

export { ClaseCasoParticular, ClaseCasoTourOperador };
