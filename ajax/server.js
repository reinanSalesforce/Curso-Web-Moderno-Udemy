// Constante inserida para que quando tivermos uma REQUISIÇÃO, os dados já vim todo ajeitado
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

/* --- VAI SER APLICADO PARA QUALQUER REQUISIÇÃO QUE CHEGAR NO SERVIDOR --- */

// Primeiro Middleware - Para informar que onde está o arquivo server "(.)", ele vai prover todos os arquivo como estatico
app.use(express.static('.'))
// Segundo Middleware - BodyParser - se vier algum formulario que no Body dá REQUISIÇÃO ele vai converter em OBJETO 
app.use(bodyParser.urlencoded({extended : true}))
// Terceiro Middleware - JSON - Se vier qualquer JSON no Body dá REQUISIÇÃO ele vai converte o JSON em objeto
app.use(bodyParser.json())

// Multer é um processo que salva os arquivos para dentro do servidor
const multer = require('multer')

// Configuração utilizada para informar em qual pasta vai ser salva o arquivo e o nome do mesmo 
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        //Informando que o destino que vai ser salvo é nessa pasta "ajax" definida pelo "'.'" ou precisa criar uma pasta e colocar o nome dela
        callback(null, './upload')
    },

    filename: function(req, file, callback){
        //Informando que o arquivo vai ser salvo com o prefixo de Data de Hoje com o nome original do arquivo 
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

// Constante criada para interpreta as configurações e informar que na requisição vai vim de um campo chamado "arquivo"
const upload = multer({ storage }).single('arquivo');

// Upload vai ser chamado apartir de uma requisição de POST
app.post('/upload', (req, resp) =>{
    //Função upload chamada e dentro dela foi passado funções callback para tratar se der erro (MELHOR FORMA)
    upload(req, resp, error =>{
        if(error){
            return resp.end('Ocorreu um Erro')
        }

        resp.end('Concluído com Sucesso')
    })
})


// Informando a porta que o servidor vai starta
app.listen(8080, () => console.log('Executando...'))
