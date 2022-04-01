import sumar from "./calcularCadena.js";

describe("Calcular Cadena", () => {
  it("deberia tomar una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });
  it("deberia tomar una cuenta un cadena de un solo numero", () => {
    expect(sumar("2")).toEqual(2);
  });
  it("deberia tomar una cadena con dos numeros separados por coma", () => {
    expect(sumar("1,2")).toEqual(3);
  });
  it("tomando una cadena cualquier cadena de dos numeros separados por coma", () => {
    expect(sumar("3,4")).toEqual(7);
  });
  it("deberia tomar una cadena con cualquier cantidad de numeros separados por coma", () => {
    expect(sumar("3,4,1")).toEqual(8);
  });
  it("deberia tomar una cadena con n numeros separados por coma y/o guion", () => {
    expect(sumar("3-4,1")).toEqual(8);
  });

  it("deberia tomar una cadena con un separador puesto por el usuario ", () => {
    expect(sumar("//[;] 3-4,1;2")).toEqual(10);
  });
});
