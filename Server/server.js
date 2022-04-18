const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    const axios = require('axios')
    const uri = 'https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json';
    axios.get(uri)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.statusCode(500)
            res.end()
            console.log(error)
        });
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});

app.use(cors());
