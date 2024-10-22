const maiorOuIgual = (num1, num2) => {
    if(num1 === num2){
        console.log(true);
    }else if(num1 > num2){
        console.log(true);
    }else{
        console.log(false);
    }
}

maiorOuIgual(0,  0);

// OUUU

function maiorOuIgual2(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}

console.log(maiorOuIgual2(0,0))