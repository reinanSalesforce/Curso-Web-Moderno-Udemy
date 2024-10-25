function receberPares(numeros) {
  return console.log(numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0;
    const indicePar = indice % 2 === 0;
    return numeroPar && indicePar;
  }));
}
receberPares([1, 2, 3, 4]);
receberPares([10, 70, 22, 43]);
