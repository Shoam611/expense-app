const { UserModel } = require('./schemas');
const mongoose = require('mongoose');
const { connect } = mongoose
class UsersRepository {
    constructor() {
        this.databaseName = process.env.db_name;
        this.connectionString = process.env.db_connection_string;
        this.init()
    }
    async init() {connect(`${this.connectionString}/${this.databaseName}`)}
    //Create
    async addAsync(newDoc) {
        console.log('in add user', newDoc);
        const q = new UserModel({ ...newDoc });
        await q.save();
        return q._id;
    }
    //Read
    async getDefaultAsync() {
        console.log('in get actions');
        let user = await UserModel.find({}).cursor().next();
        if(!user){
            this.addAsync({name:'default user',dayOfTracking:1,currentBalance:0});
            user = await UserModel.find({}).cursor().next();
        }
        else{
            console.log("retrived user",user.name);
            return user;
        }
    }
    //Update
    async UpdateOne(id,name,balance,dayOfTracking) {
        console.log('in update action');
        console.log(id,name,dayOfTracking,balance);
       const oldDoc =await UserModel.updateOne({_id:id},{name:name,currentBalance:balance,dayOfTracking:dayOfTracking });
       console.log("modified: ", oldDoc.modifiedCount);
    }
}
module.exports = UsersRepository