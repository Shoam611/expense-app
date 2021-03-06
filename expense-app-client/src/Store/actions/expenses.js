import axios from "axios";
export const ADDEXPENSE = "ADDEXPENSE";
export const FETCHEXPENSES = "FETCHEXPENSES";
export const FETCHCURRENTEXPENSES = "FETCHCURRENTEXPENSES";

export const addExpense = (newExpense) => {
    return async (dispatch, getState) => {
        try {
            let user = getState().users.user;
            if (!user) {
                user = JSON.parse(window.sessionStorage.getItem("user"));
                if (!user) {
                    console.log("aborting add expense"); dispatch({ type: 'x' }); return;
                }
            }
            console.log(user);
            const response = await axios.post(`http://localhost:8080/expenses`, { id: user._id, newExpense });
            const responseData = await response.data
            newExpense._id = responseData.data;
            dispatch({ type: ADDEXPENSE, newExpense:{...newExpense,addedAt : new Date()}});
        } catch (err) { console.log(err); }
    }
}

export const fetchCurrentExpenses = () => {
    return async (dispatch, getState) => {
        let user = getState().users.user;
        if (!user) {
            user = JSON.parse(window.sessionStorage.getItem("user"));
            if (!user) {
                dispatch({ type: 'x' });
                console.log("aborted");
                return;
            }
        }
        const today = new Date()
        const minDate = new Date(today.getFullYear(), today.getMonth(), user.dayOfTracking);
        const maxDate = new Date(minDate.getFullYear(), minDate.getMonth() + 1, user.dayOfTracking - 1);
        const response = await axios.get(`http://localhost:8080/expenses?userId=${user._id}&date=${minDate}`);
        const responseData = await response.data;
        console.log('respons data for current expenses', responseData);
        window.sessionStorage.setItem("currentExpesnses", JSON.stringify(responseData))
        dispatch({ type: FETCHCURRENTEXPENSES, currentExpenses: responseData, minDate, maxDate });
    }
}
export const fetchExpenses = (date) => {
    return async (dispatch, getState) => {
        const user = getState().users.user ? getState().users.user : JSON.parse(window.sessionStorage.getItem("user"));
        if (!user) {
                dispatch({ type:'x'});
                console.log("aborted");
                return;
        }
        console.log('passed cond');
        const minDate = new Date(date.getFullYear(), date.getMonth(), user.dayOfTracking);
        console.log("min date in fetch expenses", minDate);
        const maxDate = new Date(minDate.getFullYear(), minDate.getMonth() + 1, minDate.getDay()-1);
        const response = await axios.get(`http://localhost:8080/expenses?userId=${user._id}&date=${minDate}`);
        const responseData = await response.data;
        console.log('respons data for expenses', responseData);
        dispatch({ type: FETCHEXPENSES, expenses: responseData, minDate, maxDate });
    }
}