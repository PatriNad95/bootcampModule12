import { ClaseCasoParticular, ClaseCasoTourOperador } from "./motor";
import { Reserva } from "./model";

describe("ClaseCasoParticular", () => {
  const reservas: Reserva[] = [
    { tipoHabitacion: "standard", desayuno: false, pax: 1, noches: 3 },
    { tipoHabitacion: "standard", desayuno: false, pax: 1, noches: 4 },
    { tipoHabitacion: "suite", desayuno: true, pax: 2, noches: 1 },
  ];

  it("debería calcular correctamente el subtotal sin IVA", () => {
    const claseParticular = new ClaseCasoParticular(reservas);
    const subtotal = claseParticular.calcularSubtotal();
    expect(subtotal).toBe(920);
  });

  it("debería calcular correctamente el total con IVA", () => {
    const claseParticular = new ClaseCasoParticular(reservas);
    const total = claseParticular.calcularTotal();
    expect(total).toBe(1113.2);
  });
});

describe("ClaseCasoTourOperador", () => {
  const reservas: Reserva[] = [
    { tipoHabitacion: "standard", desayuno: false, pax: 1, noches: 3 },
    { tipoHabitacion: "standard", desayuno: false, pax: 1, noches: 4 },
    { tipoHabitacion: "suite", desayuno: true, pax: 2, noches: 1 },
  ];

  it("debería calcular correctamente el subtotal sin IVA", () => {
    const claseTourOperador = new ClaseCasoTourOperador(reservas);
    const subtotal = claseTourOperador.calcularSubtotal();
    expect(subtotal).toBe(870);
  });

  it("debería calcular correctamente el total con IVA y descuento", () => {
    const claseTourOperador = new ClaseCasoTourOperador(reservas);
    const total = claseTourOperador.calcularTotal();
    expect(total).toBe(894.795);
  });
});
