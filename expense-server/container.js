const awilix = require('awilix');
const container = awilix.createContainer();
const expenseRepository = require('./DAL/expensesRepository');
const expenseController = require('./controllers/expenseController');

const usersRepository = require('./DAL/usersRepository');
const usersController = require('./controllers/usersController');
const registerServices = ()=>{
    container.register({
        expenseRepository: awilix.asClass(expenseRepository).singleton(),
        expenseController: awilix.asClass(expenseController).singleton(),
        usersRepository: awilix.asClass(usersRepository).singleton(),
        usersController: awilix.asClass(usersController).singleton(),
        });
}
module.exports= { registerServices , container }