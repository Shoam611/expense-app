const awilix = require('awilix');
const container = awilix.createContainer();
const expenseRepository = require('./DAL/expensesRepository');
const expenseController = require('./controllers/expenseController');
const registerServices = ()=>{
    container.register({
        expenseRepository: awilix.asClass(expenseRepository).singleton(),
        expenseController: awilix.asClass(expenseController).singleton()
        });
}
module.exports= { registerServices , container }