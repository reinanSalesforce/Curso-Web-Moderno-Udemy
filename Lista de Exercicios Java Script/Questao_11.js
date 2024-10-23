const receberPrimeiroEUltimoElemento = (numArray = []) => {
    let primeiroElemento = numArray.shift();
    let ultimoElemento = numArray.pop();

    let resultadoArray = [primeiroElemento,ultimoElemento];
    console.log(resultadoArray);
}

receberPrimeiroEUltimoElemento([7,2,4,5,1,34]);