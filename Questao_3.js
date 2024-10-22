
// ***************** ERRADO ************************
const calcularSalario = (horasTrabalhadas, recebeHoras) => {
    salarioMes = horasTrabalhadas * recebeHoras; 
    return console.log("Salário igual a R$ " + salarioMes);
}
calcularSalario(150, 40.5); 
calcularSalario(180, 60); 
// ***************** ERRADO ************************


//********************CORRETO ********************/

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora){
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `Salário igual a R$ ${salarioLiquido}`
}

console.log(calcularSalarioLiquido(150, 40.5));

//********************CORRETO ********************/