const { ExpenseModel } = require('./schemas');
const { connect } = require('mongoose');
class ExpensesRepository {
    constructor() {
        this.databaseName = process.env.db_name;
        this.connectionString = process.env.db_connection_string;
        this.init()
    }
    async init() { connect(`${this.connectionString}/${this.databaseName}`) }
    //Create
    async addAsync(id,newDoc) {

        console.log("in adding expense",id,newDoc);
        const q = new ExpenseModel({ ...newDoc,ownerId:id });
        await q.save();
        return q._id;
    }
    //Delete
    async DeleteOneAsync(id) {ExpenseModel.deleteByIdAsync(id);}
    //Read
    async getManyAsync(date, userId) {
        const dMin = date ;
        const dMax = new Date(dMin.getFullYear(), dMin.getMonth() + 1, dMin.getDate() - 1);
        const query = await ExpenseModel.find({ ownerId: userId })
                                        .where({ createdAt: { $gte: dMin.toDateString(), $lte: dMax.toDateString() } })
                                        .sort('-createdAt');
        console.log("number of queries fetched : ", query.length,typeof(query));
        // console.log("queries ", query);
        return query ? query : [];
    }
    //Update
    async UpdateOne(id, newDoc) {

    }
}
module.exports = ExpensesRepository