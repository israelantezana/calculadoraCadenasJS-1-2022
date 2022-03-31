import sumar from "./calcularCadena.js";

describe("Calcular Cadena", () => {
  it("tomando una cadena vacia deberia retornar 0", () => {
    expect(sumar("")).toEqual(0);
  });
  it("tomando una cadena con numero 2 deberia retornar 2", () => {
    expect(sumar("2")).toEqual(2);
  });
  it("tomando una cadena con dos numeros 1,2 deberia retornar 3", () => {
    expect(sumar("1,2")).toEqual(3);
  });
  it("tomando una cadena con dos numeros 3,4 deberia retornar 7", () => {
    expect(sumar("3,4")).toEqual(7);
  });
  it("tomando una cadena con dos numeros 3,4,1 deberia retornar 7", () => {
    expect(sumar("3,4,1")).toEqual(8);
  });
  it("tomando una cadena con dos numeros 3-4,1 deberia retornar 7", () => {
    expect(sumar("3-4,1")).toEqual(8);
  });
  /*it("tomando una cadena con dos numeros //[;] 3-4,1;2 deberia retornar 10", () => {
    expect(sumar("//[;] 3-4,1;2")).toEqual(10);
  });*/
});
