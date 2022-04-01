function sumar(cadena) {
  let total = 0;
  let delimitadores = "-|,";
  if (tieneDelimitador(cadena)) {
    const delimitador = obtenerDelimitador(cadena);
    delimitadores += "|" + delimitador;
    cadena = quitarCabecera(cadena);
  }

  let numeros = cadena.split(new RegExp(delimitadores));

  for (var i = 0; i < numeros.length; i++) {
    total += Number(numeros[i]);
  }
  return total;
}

function quitarCabecera(cadena) {
  return cadena.substring(5);
}

function tieneDelimitador(cadena) {
  return cadena.startsWith("//[");
}

function obtenerDelimitador(cadena) {
  return cadena[3];
}
export default sumar;
