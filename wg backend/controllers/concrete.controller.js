//placeholder for concrete controllers
const Concrete = require('../models/Concrete')
module.exports.index = (request, response) => {
    response.json({message: "Hello westernGravel!"});
}
// create
module.exports.createConcrete = (request, response) => {
    
    Concrete.create(request.body)
        .then(concrete => response.status(200).json(concrete))
        .catch(err => response.status(404).json(err))
}
// findone
module.exports.getConcrete = (request, response) => {
    Concrete.findOne({_id:request.params.id})
        .then(concrete => response.json(concrete))
        .catch(err => response.json(err));
}
// find all
module.exports.getAllConcretes = (request, response) => {
    Concrete.find({})
        .then(concretes => {
            console.log(concretes)
            response.json(concretes)})
        .catch(err => {
            console.log(err)
            response.json(err)
        });
}
// update
module.exports.updateConcrete = (request, response) => {
    Concrete.updateOne({
        _id: request.params.id},
        request.body, {new:true})
        .then(updatedConcrete => response.json(updatedConcrete))
        .catch(err => response.json(err))
}
// delete
module.exports.deleteConcrete = (request, response) => {
    Concrete.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}