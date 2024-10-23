const repetir = (num1, num2) => {
  let resultado = 0;
  if (num1 >= 0 && num2 >= 0) {
    for (let i = 0; i < num2; i++) {
      resultado += num1;
     
    }
    return resultado;
  }
};

console.log(repetir(5, 5));
