// URL para ser acessada via AXIOS
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'; 

//Importa o Axios (faz requisições para obter um retorno de algo que está remoto)
const axios = require('axios');

//Realizando um get na URL que foi passada
//Após é realizado um ".then" como se fosse um try/catch e dentro dele criando uma função de retorno
// e de acordo com os dados que vem de "data" voce^pode manipular.
axios.get(url).then(response =>{
    const mulher = e => e.genero === 'F';

    const pais = e => e.pais === 'China';
    // Reduce acessando um valor do objeto
    const menorSalario = (funcAcumulador, funcAtual) =>{
        return funcAcumulador.salario < funcAtual.salario ? funcAcumulador : funcAtual
    }

    // Filtrando por apenas mulher, pelo pais china e pelo menor salario
    const funcionarios = response.data.filter(mulher).filter(pais).reduce(menorSalario);

    console.log(funcionarios);
}).catch((error) =>{
    this.error = error;
});
