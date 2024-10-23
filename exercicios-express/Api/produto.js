// Modulo que vai praticamente fazer tudo: tratamento de envio, retorno e os metodos (get, post e etc)

module.exports = (app, texto) => {
    function salvar (req, res){
        res.send('Produto > salvar' + texto)
    }
    
    function obter(req, res){
        res.send('Produto > obter' + texto)
    }

    // Chamando os métodos
    app.post('/produto', salvar)
    app.get('/produto', obter)

    // caso queira retorna é só fazer
    return {salvar, obter}
}