const estaEntre = (numero, minimo, maximo, inclusivo) => {
    let constBoolean
    if(numero > minimo && numero < maximo ){
        constBoolean = "1" + true 
    }else if(numero < minimo || numero > maximo){ 
        constBoolean = "2" + false;
    }else if((numero == minimo || numero == maximo) && inclusivo != true){
        constBoolean = "3" + false;
    }else if ((numero == minimo || numero == maximo) && inclusivo == true){
        constBoolean = "4" + true
    }

    console.log(constBoolean);
   

}

/* Outra Forma de Fazer

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
      return numero >= minimo && numero <= maximo;
    } else {
      return numero > minimo && numero < maximo;
    }
  }
    
*/
  


estaEntre(10, 50, 100);
estaEntre(16, 100, 160);
estaEntre(3, 3, 150);
estaEntre(3,3, 150,true);


