import useSessionStorage from "hooks/useSessionStorage";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Line } from "UIKit";

const UserDataPresenter = () => {

    const reduxUser = useSelector(state => state.users.user) 
    const currentExpenses = useSelector(state => state.expenses.currentExpenses);
    const user = useSessionStorage("user").value;
    // let user = sessionUser
    const clacPrediction = () => user.currentBalance - calcExpensesSoFar();
    const calcExpensesSoFar = () => {
        let sum = 0;
        if (currentExpenses) currentExpenses.forEach(element => {sum += element.expenseValue });
        return sum;
    }
    useState(()=>{
        console.log("user: ",user,typeof(user));
    },[user])
    return ( user ?
        <ul>
            <li>
                <Line >
                    <h4>Expenses for :</h4>
                    <h4>{user.name }</h4>
                </Line >
            </li>
            <li>
                <Line justify="between">
                    <Line>
                        <h3>Expenses so far this month:</h3>
                        <h3>{calcExpensesSoFar()}</h3>
                    </Line>
                </Line >
            </li>
            <li>
                <Line>
                    <h3>Curren prediction to the next day of traking:  {clacPrediction()}</h3>
                </Line>
            </li>
        </ul> : <div></div>
    )
}
export default UserDataPresenter