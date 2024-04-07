//placeholder for aggregate controllers
const Agg = require('../models/Aggregate')
module.exports.index = (request, response) => {
    response.json({message: "Hello westernGravel!"});
}
// create
module.exports.createAgg = (request, response) => {
    
    Agg.create(request.body)
        .then(user => response.status(200).json(user))
        .catch(err => response.status(404).json(err))
}
// findone
module.exports.getAgg = (request, response) => {
    Agg.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err));
}
// find all
module.exports.getAllAggs = (request, response) => {
    Agg.find({})
        .then(aggs => {
            console.log(aggs)
            response.json(aggs)})
        .catch(err => {
            console.log(err)
            response.json(err)
        });
}
// update
module.exports.updateAgg = (request, response) => {
    Agg.updateOne({
        _id: request.params.id},
        request.body, {new:true})
        .then(updatedAgg => response.json(updatedAgg))
        .catch(err => response.json(err))
}
// delete
module.exports.deleteAgg = (request, response) => {
    Agg.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}