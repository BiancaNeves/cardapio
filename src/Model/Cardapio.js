const mongoose = require('mongoose');

const CardapioSchema = new mongoose.Schema({
    diaSemana : {
        type: String,
        enum: [
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado",
            "Domingo"
        ],
    },
    refeicao:{
        type: String,
        enum: [
            "Almoço",
            "Janta"
        ]
    },
    comida: {
        type: String
    }
});

mongoose.model('Cardapio', CardapioSchema);

