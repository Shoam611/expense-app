class ExpenseController
{    
    constructor({expenseRepository})
    {
        this.expenseRepository=expenseRepository;
    }
    getExpenseForUser = async ({query}) => {
        const dateFromQuery =new Date(query.date)
        console.log("date from query",dateFromQuery  ? dateFromQuery : new Date());
        try{
            return await this.expenseRepository.getManyAsync(dateFromQuery ? dateFromQuery : new Date(),query.userId)
        }catch{
            return []

        }
    };
    addExpenseForUser = async ({body}) => {
        return await this.expenseRepository.addAsync(body.id,body.newExpense);
    };
    updateExpenseForUser = async ({body}) => {
        
    };
    deleteExpenseForUser = async ({body}) => {
        this.expenseRepository.DeleteOneAsync(body.id)
    };
}
module.exports = ExpenseController