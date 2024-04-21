const mongoose = require('mongoose');
const ConcreteSchema = new mongoose.Schema({
    //everyday mixes
    concrete: { type: String },
    //60104303
    mix: { type: Integer },
    //194.06
    cost: { type: Double },
}, { timestamps: true });
module.exports = mongoose.model('Concrete', ConcreteSchema);