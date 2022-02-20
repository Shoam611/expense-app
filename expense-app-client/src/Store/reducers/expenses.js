import { FETCHEXPENSES, FETCHCURRENTEXPENSES } from "Store/actions/expenses";
const today = new Date();

const initialState = {
    currentExpenses: null,
    expenses: null,
    minDate: new Date(today.getFullYear(), today.getMonth(), 2),
    maxDate: new Date(today.getFullYear(), today.getMonth() + 1, 1),
}
const reducer = (state = initialState, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case FETCHEXPENSES:
            console.log("seting expenses to", action.expenses);
            return { ...state, expenses:action.expenses,minDate:action.minDate,maxDate:action.maxDate };
        case FETCHCURRENTEXPENSES:
            console.log("seting current expenses to", action.currentExpenses);
            return { ...state, currentExpenses: action.currentExpenses };
        default: return state;
    }
}
export default reducer