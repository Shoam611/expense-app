import './addExpenseView.css'
import useInput from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { Btn, Input, Line } from 'UIKit';
import './settingsView.css'
import { addExpense } from 'Store/actions/expenses';
import { useState } from 'react';
const View = (props) => {
    const dispatch = useDispatch();
    const storeName = useInput()
    const expenseValue = useInput()
    const validate = () => {
        return isNaN(storeName.value) &&
            !isNaN(expenseValue.value) &&
            expenseValue.value > 0 && 
            storeName.value.length > 4 &&
            storeName.value.length < 50;
    }
    const [cancelMessege, setCancelMessage] = useState("");
    const [didTryToCancel, setDidTryToCancel] = useState(false);
    const clearInput = () => {
        storeName.onChange({ target: { value: '' } })
        expenseValue.onChange({ target: { value: '' } })
        setDidTryToCancel(false);
        setCancelMessage("")
    }
    const cancelHandler = () => {
        if (storeName.value.length > 0 || expenseValue.value.length > 0) {
            if (!didTryToCancel) {
                setCancelMessage("Do you want to discard all changes?")
                setDidTryToCancel(true);
            } else {
                clearInput();
            }
        } else {
            setCancelMessage("your fields are empty bro!.")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(addExpense({ storeName: storeName.value ? storeName.value : ' ', expenseValue:expenseValue.value }));
            alert('Expense Was Added!')
            clearInput();
        }
        else
            alert('rensure your input is valid')
    }

    return (
        <div >
            <h2>Add Expense Form</h2>
            <form onSubmit={handleSubmit}>
                <Line>
                    <h4>Expense value:</h4>
                    <Input placeholder="the cost.." {...expenseValue} type="number" min={0} />
                </Line>
                <Line>
                    <h4>Expense Stroe (optional )</h4>
                    <Input placeholder="store name..." {...storeName} />
                </Line>
                <Line>
                    <Input type="submit" value="Add Expense" />
                    <Btn onClick={cancelHandler}>Cancel</Btn>
                </Line>
                <Line>
                    <div >{cancelMessege}</div>

                </Line>
            </form>
        </div>
    )
}
export default View