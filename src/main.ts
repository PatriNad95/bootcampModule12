import { Reserva } from "./model";
import { ClaseCasoParticular, ClaseCasoTourOperador } from "./motor";
const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

// Caso particular
const casoParticular = new ClaseCasoParticular(reservas);
const subtotalParticular = casoParticular.calcularSubtotal();
const totalParticular = casoParticular.calcularTotal();
console.log("Caso Particular - Subtotal (sin IVA):", subtotalParticular);
console.log("Caso Particular - Total (con IVA):", totalParticular);

// Caso tour operador
const casoTourOperador = new ClaseCasoTourOperador(reservas);
const subtotalTourOperador = casoTourOperador.calcularSubtotal();
const totalTourOperador = casoTourOperador.calcularTotal();
console.log("Caso Tour Operador - Subtotal (sin IVA):", subtotalTourOperador);
console.log("Caso Tour Operador - Total (con IVA):", totalTourOperador);
