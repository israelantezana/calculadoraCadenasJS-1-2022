function sumar(cadena) {
  let suma = 0;
  /*if(cadena[0] == "/")
    {
        let del =cadena.split(/[[\s]+/);
        var delimitador = del.slice(0,-1);;
        del.
    }*/
  let numeros = cadena.split(/[,-]+/);
  /*delimitador = numeros[1].slice(0,-1);*/

  for (var i = 0; i < numeros.length; i++) {
    suma += Number(numeros[i]);
  }
  return suma;
}
export default sumar;
