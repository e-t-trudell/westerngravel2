const mongoose = require('mongoose');
const AggregateSchema = new mongoose.Schema({
    aggregate: { type: String },
    size: { type: Integer },
    cost: { type: Integer },
}, { timestamps: true });
module.exports = mongoose.model('Aggregate', AggregateSchema);