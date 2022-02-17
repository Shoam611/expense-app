const {Schema,model} = require('mongoose');
const userSchema=new Schema({
    name:String,
    dayOfTraking:Number,
    currentBalance:Number
}, {timestamps:true} );
const expenseSchema = new Schema({
storeName:String,
expanseValue:Number,
ownerId:String
},{timestamps:true} );
const ExpenseModel= model('ExpenseModel',expenseSchema);
const UserModel= model('UserModel',userSchema);
module.exports ={
    ExpenseModel,
    UserModel
}