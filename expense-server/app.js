const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { container } = require('./container');
const expenseController = container.resolve('expenseController');
app.get(   '/expenses' , async (req,res) =>{const expenses = await expenseController.getExpenseForUser(req);  res.send(JSON.stringify(expenses)) } )
app.post(  '/expenses' , async (req,res) =>{const newId = await expenseController.addExpenseForUser(req);   res.send(newId.toString()); } )
app.put(   '/expenses' , async (req,res) =>{expenseController.updateExpenseForUser(req);res.sendStatus(200); } )
app.delete('/expenses' , async (req,res) =>{expenseController.deleteExpenseForUser(req);res.sendStatus(200); } );

const usersController = container.resolve('usersController');
app.get('/defaultUser' , async (req,res) =>{const user =await usersController.getDefaultUser();res.send(JSON.stringify(user))} )
app.put('/defaultUser' , async (req,res) =>{usersController.updateDefaultUser(req);res.send(200) } );


module.exports = app