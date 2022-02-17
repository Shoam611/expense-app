class ExpenseController
{    
    constructor({expenseRepository})
    {
        this.expenseRepository=expenseRepository;
    }
    getExpenseForUser = async ({query}) => {
        const today = new Date();
       return await this.expenseRepository.getManyAsync(today,query.userId)
    };
    addExpenseForUser = async ({body}) => {
        return await this.expenseRepository.addAsync(body.newExpense);
    };
    updateExpenseForUser = async ({body}) => {
        
    };
    deleteExpenseForUser = async ({body}) => {
        this.expenseRepository.DeleteOneAsync(body.id)
    };
}
module.exports = ExpenseController