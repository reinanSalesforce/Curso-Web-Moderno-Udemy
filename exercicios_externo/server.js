const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/usuarios', (req, resp) =>{
    const listaUser = [
        { "id": 1, "nome": "Carlos" },
        { "id": 2, "nome": "Ana" },
        { "id": 3, "nome": "Mariana" }
      ]
      resp.send(listaUser)
      
})

app.listen(8080, ()=> console.log('Executando....'))