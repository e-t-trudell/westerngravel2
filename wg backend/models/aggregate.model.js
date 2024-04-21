const mongoose = require('mongoose');
const AggregateSchema = new mongoose.Schema({
    aggregateName: { type: String },
    size: { type: NumberDecimal },
    // need two costs here one for plant one for  pit. list of dictionaries? Object? Array?
    cost: { type: NumberDecimal },
}, { timestamps: true });
module.exports = mongoose.model('Aggregate', AggregateSchema);