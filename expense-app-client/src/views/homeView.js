import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from 'Store/actions/users';
import { fetchExpenses, fetchCurrentExpenses } from 'Store/actions/expenses'
import { Btn, Line } from 'UIKit'
import './homeView.css'
import ExpenseTable from 'components/expenseTable';
const View = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);
    const expensesList = useSelector(state => state.expenses);
    const { expenses, currentExpenses } = expensesList;
    const getUser = () => {
        dispatch(fetchUser())
    }
    const getExpenses = () => {
        !expenses && dispatch(fetchExpenses(new Date()));
        !currentExpenses && dispatch(fetchCurrentExpenses());
    }
    const calcExpensesSoFar = () => {
        let sum = 0;
        if (currentExpenses && user) currentExpenses.forEach(element => { ; return sum += element.expenseValue ? element.expenseValue : 0; });
        return sum;
    }
    const clacPrediction = () => user.currentBalance - calcExpensesSoFar();

    const renderRefresh = () => <Line>
        <h2>Fetching data ...</h2>  <Btn onClick={getUser}>refresh</Btn>
    </Line>

    return !user ? renderRefresh() :
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
                            <Line justify="around" >
                                <ExpenseTable />

                            </Line>
                        </li>
                    </>
                }
            </ul>
        </div >
}
export default View