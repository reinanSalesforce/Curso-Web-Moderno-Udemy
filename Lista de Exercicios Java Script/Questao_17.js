const somarNumeros = (numArray = []) => {
  const soma = valor => valor * numArray.length;
  const result = numArray.map(soma);
  console.log(result[0]);
};

somarNumeros([10, 10, 10]);
somarNumeros([15, 15, 15, 15]);


// OUU 

function somarNumeros(numeros) { 
    let soma = 0 
    numeros.forEach(numero => soma += numero) 
    return soma 
}