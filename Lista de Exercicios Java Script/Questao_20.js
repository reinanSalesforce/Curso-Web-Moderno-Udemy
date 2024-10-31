const areaDoTriangulo = (base, altura) => {
    const resultArea = (base * altura) / 2
    console.log(parseFloat(resultArea).toFixed(2));
}

areaDoTriangulo(10, 15);
areaDoTriangulo(7, 9);
areaDoTriangulo(9.25, 13.1);