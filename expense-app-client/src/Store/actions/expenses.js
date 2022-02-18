import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const ADDEXPENSE = "ADDEXPENSE";
export const FETCHEXPENSES = "FETCHEXPENSES";
export const FETCHCURRENTEXPENSES = "FETCHCURRENTEXPENSES";
export const UPDATEDATE = "UPDATEDATE";
export const addExpense = (newExpense) => {
    return async (dispatch, getState) => {
        try {
            const user = getState().users.user;
            if (!user) {
                return ;
            } else {
                const response = await axios.post(`http://localhost:8080/expenses`, {id:user._id, newExpense});
                const responseData = await response.data
                newExpense._id = responseData.data;
                dispatch({ type: ADDEXPENSE, newExpense });
            }
        } catch (err) {
            handleError(err);
            dispatch({ type: '' });
        }
    }
}
export const updateDate = (minDate,maxDate)=>{
    return dispatch =>{
        dispatch({type:UPDATEDATE,minDate,maxDate})
    }
}

export const fetchCurrentExpenses = ()=>{
    return async (dispatch, getState) => {
        const user = getState().users.user;
        if (!user) { return; }
        const today = new Date();
        const minDate = new Date(today.getFullYear(), today.getMonth(), getState().users.user.dayOfTracking);
        const response = await axios.get(`http://localhost:8080/expenses?userId=${user._id}&date=${minDate}`);
        const responseData = await response.data;

        dispatch({ type: FETCHCURRENTEXPENSES, data: { currentExpenses: responseData } });
}
}
export const fetchExpenses = (date) => {
    return async (dispatch, getState) => {
        const user = getState().users.user;
        if (!user) { return; }
        const minDate = new Date(date.getFullYear(), date.getMonth(), getState().users.user.dayOfTracking);
        const maxDate = new Date(minDate.getFullYear(), minDate.getMonth() + 1, user.dayOfTracking);
        const response = await axios.get(`http://localhost:8080/expenses?userId=${user._id}&date=${minDate}`);
        const responseData = await response.data;

        dispatch({ type: FETCHEXPENSES, data: { expenses: responseData, minDate, maxDate } });
    }
}

const handleError = (err) => {

}