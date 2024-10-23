const repetir = (num1Repetir, num2VezesRepetir) => {
        let resultado = [];   
    for(let i = 0; i < num2VezesRepetir; i++ ){
        resultado.push(num1Repetir)
    }
    return resultado;
}

console.log(repetir(7,3));