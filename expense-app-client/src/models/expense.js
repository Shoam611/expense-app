export default class Expense {
    constructor(storeName,expenseValue,ownerId,createdAt,id){
        this.storeName=storeName;
        this.expenseValue=expenseValue;
        this.ownerId=ownerId;
        this.createdAt = createdAt;
        this.id=id;
    }
}