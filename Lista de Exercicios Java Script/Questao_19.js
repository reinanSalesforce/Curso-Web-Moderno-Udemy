const calcularMedia = (numArray = []) => {
    const somaTotal = (total, sum) => total + sum
    let total = 0 
    for(let i = 0; i < numArray.length; i++){
        total += numArray[i]
    }
    const result = total / numArray.length;
    console.log(result);
}

calcularMedia([0, 10])
calcularMedia([1,2,3,4,5])