const filtrarNumeros = (elementsArray = []) => {
    let listaNumb = []
    elementsArray.forEach(listaArray => typeof listaArray == 'number' ? listaNumb.push(listaArray) : 'nada')
    console.log(listaNumb);
   
}

filtrarNumeros(["JavaScript", 1, "3", "web", 20])
filtrarNumeros(["a","b"])