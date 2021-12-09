const mongoose = require('mongoose');
const Cardapio = mongoose.model('Cardapio');

module.exports = {
    async index (req, res) {
        const menus = await Cardapio.find();
        return res.json(menus);
    },

    async create (req, res) {
        const menuDoDia = await Cardapio.create(req.body);
        return res.json(menuDoDia);
    },

    async update (req, res) {
        const menuDoDia = await Cardapio.findByIdAndUpdate(req.params.id, req.body);
        return res.json(menuDoDia);
    },

    async delete (req, res) {
        const menuDoDia = await Cardapio.findByIdAndRemove(req.params.id);
        return res.send("Registro excluído");
    },

    async show(req, res) {
        const menuDoDia = await Cardapio.findById(req.params.id);
        return res.json(menuDoDia);
    }

}