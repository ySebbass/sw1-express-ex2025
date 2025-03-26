const express = require('express')
const app = express();
const port = 3000; 

app.get('/', (request, response) => {
    response.send('Olá Codespaces!!!');
});

app.get('/Mensagem/:nome', (request, response) => {
    response.send('Boa Tarde! ' + request.params['nome']);
});


app.listen(port, () => {
    console.log("Aplicação em execução na porta " + port);
});