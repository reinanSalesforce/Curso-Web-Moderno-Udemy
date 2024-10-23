const inverso = (num1) => {
    if( typeof num1 == 'number'){
        if(num1 >= 1){
            console.log(num1 * -1);
        }else{
            console.log('teste' + num1 * -1);
        }
    }else if(typeof num1 == 'boolean'){
        if(num1 == true){
            console.log(false);
        }else{
            console.log(true);
        }
    }else{
        console.log(`boolean ou número esperados, mas o parâmetro é do tipo ${typeof num1}`);
    }
}

inverso(10);

/* Código mais limpo 

const inverso = (num1) => {
    if( typeof num1 == 'number' && num1 >= 1){
            num1 = num1 * -1
    }else if(typeof num1 == 'number' && num1 < 0){
        num1 = num1 * -1
    }else if(typeof num1 == 'boolean' && num1 == true){
        num1 = false
    }else if(typeof num1 == 'boolean' && num1 == false){
         num1 = true
    }else{
        num1 = `boolean ou número esperados, mas o parâmetro é do tipo ${typeof num1}`
    }
    console.log(num1)
}

inverso(10);

 - Resolução Professor:
 
function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}




*/