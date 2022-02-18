import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUser } from 'Store/actions/users';
import { fetchExpenses } from 'Store/actions/expenses'
import { Box, Btn, Icon, Line } from 'UIKit'
import Expense from 'components/expense'
import './homeView.css'
const View = (props) => {
    const dispatch = useDispatch();
    const [showExpenses, setShowExpenses] = useState(false);
    const user = useSelector(state => state.users.user);
    const expensesList = useSelector(state => state.expenses);
    const { expenses, minDate, maxDate } = expensesList;
    const getUser = () => {
        dispatch(fetchUser())
    }
    useEffect(() => {
      getUser();
    }, [])
    const getExpenses = () => {
        dispatch(fetchExpenses(new Date()));
    }
    const calcExpensesSoFar = () => {
        let sum = 0;
        if (!expenses || !user) return;
        expenses.forEach(element => {;return sum += element.expenseValue?element.expenseValue:0; });
        return sum;
    }
    const clacPrediction = () => {
        console.log(user);
        return user.currentBalance - calcExpensesSoFar()
    }
    const getPrevMonth = () => {
        const date = new Date(minDate.getFullYear(), minDate.getMonth() - 1, minDate.getDay())
        dispatch(fetchExpenses(date))
    }
    const getNextMonth = () => {
        dispatch(fetchExpenses(maxDate))
    }
    const toggleRenderExpenses = () => {
        setShowExpenses(!showExpenses)
    }
    const renderExpenseDateRange = () => {
        return (
            <Line ><h3>{minDate.toDateString()}</h3><h3> to: </h3><h3>  {maxDate.toDateString()} </h3> </Line>
        )
    }
    const renderExpenses = () => {
        return (
            expenses.length > 0 ? expenses.map((value, index) => (
                <li key={value._id}><Expense {...value} /></li>
            )) : <h3>No available expenses for this month</h3>
        )
    }
    return (
        !user ?
            <Line>
            <h2>Fetching data ...</h2>  <Btn onClick={getUser}>refresh</Btn>
            </Line>:

            <div>
                <ul>
                    <li>
                        <Line >
                            <h4>Expenses for :</h4>
                            <h4>{user.name}</h4>
                        </Line >
                    </li>
                    {!expenses ? <Btn onClick={getExpenses}>fetch expenses</Btn> :
                        <>
                            <li>
                                <Btn onClick={getExpenses}>refresh expenses</Btn>
                                <Line >
                                    <h3>Expenses so far this month:</h3>
                                    <h3>{calcExpensesSoFar()}</h3>
                                </Line >
                            </li>
                            <li>
                                <Line>
                                    <h3>Curren prediction to the next day of traking:  {clacPrediction()}</h3>
                                </Line>
                            </li>
                            <li>
                                <Box>
                                    <Line onClick={toggleRenderExpenses} >
                                        <h3>{showExpenses ? "Collapse" : "Show"} expenses: </h3>
                                        <Icon i={showExpenses ? "chevron-up" : "chevron-down"} />
                                    </Line>
                                </Box>
                            </li>
                            <li>
                                <ul>
                                    {showExpenses && renderExpenses()}
                                </ul>
                            </li>
                            <li>
                                <Line >
                                    <Box>
                                        <Line >
                                            <Btn i="chevron-left" onClick={getPrevMonth} />
                                            <ul>
                                                {renderExpenseDateRange()}
                                            </ul>
                                            <Btn i="chevron-right" onClick={getNextMonth} />
                                        </Line>
                                    </Box>
                                </Line>
                            </li>


                        </>
                    }
                </ul>
            </div >
    )
}
export default View