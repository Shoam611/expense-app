import { Box, Line } from 'UIKit';
import './expense.css'
const Expense = (props) => {
    const date = new Date(props.createdAt).toDateString();
    return (
        <Box className="expense">
            <Line justify="between">
                <h4>{props.storeName ? props.storeName : 'not mentioned'}</h4>
                <h4>{props.expenseValue}</h4>
                <h4>{date}</h4>
            </Line>
        </Box>
    )
}
export default Expense;