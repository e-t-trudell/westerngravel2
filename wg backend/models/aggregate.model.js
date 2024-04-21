const mongoose = require('mongoose');
const AggregateSchema = new mongoose.Schema({
    // 3/4 washed
    aggregateName: { type: String },
    // 0.75
    size: { type: Double },
    // need two costs here one for plant one for  pit. list of dictionaries? Object? Array?
    // 15.00
    cost: { type: Double },
}, { timestamps: true });
module.exports = mongoose.model('Aggregate', AggregateSchema);