class ExpenseController
{    
    constructor({usersRepository})
    {
        this.usersRepository=usersRepository;
        
    }
    getDefaultUser = async () =>{
        console.log('in user controller');
      return await this.usersRepository.getDefaultAsync();
    }   
    updateDefaultUser = async ({body})=> {
        console.log('in update controller');
        this.usersRepository.UpdateOne(body.id,body.name,body.balance,body.dayOfTracking)
    }
}
module.exports = ExpenseController