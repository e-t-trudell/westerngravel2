const AggregateController = require('../controllers/aggregate.controller');
module.exports = (app) => {
    app.get('/api', AggregateController.index);
    app.get('/api/aggregates', AggregateController.getAllAggs);
    app.get('/api/aggregate/:id', AggregateController.getAgg );
    app.post('api/aggregate', AggregateController.createAgg);
    app.put('/api/aggregate/:id', AggregateController.updateAgg);
    app.delete('/api/aggregate/:id', AggregateController.deleteAgg);
}