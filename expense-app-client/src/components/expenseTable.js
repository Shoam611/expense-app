import {  useSelector } from "react-redux";
import { Box, Btn, Line, Rows, Toggler } from "UIKit";
import Expense from "./expense";
import './expenseTable.css'

const ExpenseTable = (props) => {

    const expensesList = useSelector(state => state.expenses);
    const { expenses, minDate, maxDate } = expensesList;
    const getPrevMonth = () => {props.prev(minDate);}
    const getNextMonth = () => props.next(maxDate);
    const renderExpenses = () => {
        return (
           expenses && expenses.length > 0 ? expenses.map((value, index) => (
                <Expense {...value} key={value._id} />
            )) : <h3>No available expenses for this month</h3>
        )
    }
    const renderExpenseDateRange = () => {
        return (
            <Line ><h3>{minDate.toDateString()}</h3><h3> to: </h3><h3>  {maxDate.toDateString()} </h3> </Line>
        )
    }
    return (
        <div className="expense-table">
            <Rows>
                <Toggler title={'Toggle expenses: '}>
                    <Rows>
                    <ExpenseHeader />
                        <div className="expense-container">
                            {renderExpenses()}
                        </div>
                    </Rows>
                </Toggler>
                <Box>
                    <Line justify="between">
                        <Btn i="chevron-left" onClick={getPrevMonth} />
                        {renderExpenseDateRange()}
                        <Btn i="chevron-right" onClick={getNextMonth} />
                    </Line>
                </Box>
            </Rows>
        </div>
    )
}

const ExpenseHeader =() =>{
    return(
        <div style={{padding:"0 2em"}}>
                <Line justify="between">
                    <h4>Store: </h4>
                    <h4>Expense Value: </h4>
                    <h4>Added at: </h4>
                </Line>
        </div>
    )
}
export default ExpenseTable