const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { container } = require('./container');
const expenseController = container.resolve('expenseController');
app.get(   '/expenses' , async (req,res) =>{expenseController.getExpenseForUser(req);  res.sendStatus(200); } )
app.post(  '/expenses' , async (req,res) =>{const newId = await expenseController.addExpenseForUser(req);   res.send(newId.toString()).status(200); } )
app.put(   '/expenses' , async (req,res) =>{expenseController.updateExpenseForUser(req);res.sendStatus(200); } )
app.delete('/expenses' , async (req,res) =>{expenseController.deleteExpenseForUser(req);res.sendStatus(200); } );

// const userController = container.resolve('userController');
app.get('/users' , async (req,res) =>{ } )
app.put('/users' , async (req,res) =>{ } );


module.exports = app