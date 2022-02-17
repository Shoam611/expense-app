const {ExpenseModel} = require('./schmas');
const { connect, disconnect } = require('mongoose');
class ExpensesRepository {
    constructor(proxy) {
        this.databaseName = process.env.db_name;
        this.connectionString = process.env.db_connection_string;
        this.init()
    }
    async init() {connect(`${this.connectionString}/${this.databaseName}`)}
    //Create
    async addAsync(newDoc) {
        console.log('in add expanse',newDoc);
        const q = new ExpenseModel({ ...newDoc });
        await q.save();
        return q._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        ExpenseModel.deleteByIdAsync(id);
    }
    //Read
    async getOneAsync(id) {
        const query = ExpenseModel.findOne({ _id: id });
        const doc = await query.next();
        return doc;
    }
    async getManyAsync(date,userId) {
        const dayOfTraking = 1;
        const dMin = new Date(date.getFullYear() ,date.getMonth(),dayOfTraking+1)
        const dMax = new Date(dMin.getFullYear(),dMin.getMonth()+1 , dMin.getDate()-1);
        console.log(dMin);
        console.log(dMax);
        const query =  ExpenseModel.find({ownerId:{userId}, createdAt:{ $lte:dMin.toISOString(), $gte:dMax.toISOString()}}).sort('-createdAt').cursor();
         const list = [];
         for (let doc = await query.next();doc != null;doc = await query.next()) {
             list.push(doc);
        }
         console.log("list", list);
        return list;
    }
    //Update
    async UpdateOne(id, newDoc) {

    }
}
module.exports = ExpensesRepository