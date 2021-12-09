const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

app.use(express.json()); //define que vai trabalhar com dados json

app.use(cors()); //libera pra geral

mongoose.connect('mongodb+srv://bianca:asdf000@cardapiocluster.qado9.mongodb.net/Cardapio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/Model');

app.use('/api', require('./src/Rotas/rotas'));
app.listen(3000);
