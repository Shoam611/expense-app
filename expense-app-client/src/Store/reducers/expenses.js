import { FETCHEXPENSES ,FETCHCURRENTEXPENSES} from "Store/actions/expenses";

const today=new Date()

const initialState = {
    currentExpenses:null,
    expenses:null,
    minDate:  new Date(today.getFullYear(), today.getMonth(), 2),
    maxDate:  new Date(today.getFullYear(), today.getMonth() + 1,1),
}
 const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCHEXPENSES: return {...state,...action.data};
        case FETCHCURRENTEXPENSES: return {...state,...action.data};
    }
    return state;
}
export default reducer