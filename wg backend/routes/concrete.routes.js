const ConcreteController = require('../controllers/concrete.controller');
module.exports = (app) => {
    app.get('/api', ConcreteController.index);
    app.get('/api/concretes', ConcreteController.getAllConcretes);
    app.get('/api/concrete/:id', ConcreteController.getConcrete );
    app.post('api/concrete', ConcreteController.createConcrete);
    app.put('/api/concrete/:id', ConcreteController.updateConcrete);
    app.delete('/api/concrete/:id', ConcreteController.deleteConcrete);
}