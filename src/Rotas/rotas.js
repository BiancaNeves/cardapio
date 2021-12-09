
const express = require('express');
const rotas = express.Router();

const CardapiorController = require('../Controller/CardapiorController');
rotas.get('/cardapio', CardapiorController.index);
rotas.get('/cardapio/:id', CardapiorController.show);
rotas.post('/cardapio', CardapiorController.create);
rotas.put('/cardapio/:id', CardapiorController.update);
rotas.delete('/cardapio/:id', CardapiorController.delete);
module.exports = rotas;
