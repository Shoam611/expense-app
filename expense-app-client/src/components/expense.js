import { Box, Line } from 'UIKit';
import './expense.css'
const Expense = (props) => {
    console.log(props);
    // console.log("in expense item",props.expenseValue);
    return (
        <Box>
            <Line>
                <h4>Store name:</h4>
                <h4>{props.storeName ? props.storeName : 'not mentioned'} .</h4>

                <h4>Expanse value:</h4>
                <h4>{props.expenseValue} .</h4>

                <h4>Added at:</h4>
                <h4>{new Date(props.createdAt).toDateString()} .</h4>
            </Line>
        </Box>
    )
}
export default Expense;