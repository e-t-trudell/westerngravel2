const mongoose = require('mongoose');
const ConcreteSchema = new mongoose.Schema({
    concrete: { type: String },
    mix: { type: Integer },
    cost: { type: Integer },
}, { timestamps: true });
module.exports = mongoose.model('Concrete', ConcreteSchema);