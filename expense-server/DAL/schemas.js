const {Schema,model} = require('mongoose');
const userSchema=new Schema({
    name:String,
    dayOfTracking:Number,
    currentBalance:Number
}, {timestamps:true} );
const expenseSchema = new Schema({
storeName:String,
expenseValue:Number,
ownerId:String
},{timestamps:true} );
const ExpenseModel= model('ExpenseModel',expenseSchema);
const UserModel= model('UserModel',userSchema);
module.exports ={
    ExpenseModel,
    UserModel
}