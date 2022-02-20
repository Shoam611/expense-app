import useInput from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { Btn, Input, Line } from 'UIKit';
import { addExpense } from 'Store/actions/expenses';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './addExpenseView.css'
import './settingsView.css';
const View = (props) => {
    const dispatch = useDispatch();
    const storeName = useInput();
    const expenseValue = useInput();
    const navigate = useNavigate();
 
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
        storeName.setValue('')
        expenseValue.setValue('')
        setDidTryToCancel(false);
        setCancelMessage("")
    }
    const cancelHandler = () => {
        if (storeName.value.length > 0 || expenseValue.value.length > 0) {
            if (!didTryToCancel) {
                setCancelMessage("Do you want to discard all changes?")
                setDidTryToCancel(true);
            } else navigate('/home');
        } else navigate('/home');

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(addExpense({ storeName: storeName.value ? storeName.value : ' ', expenseValue: expenseValue.value }));
            setCancelMessage('Expense Was Added!')
            clearInput();
        }
        else
            setCancelMessage('rensure your input is valid')
    }
    const updateExpenseValueState = () => {
    }

    return (
        <div  >
            <h2>Add Expense Form</h2>
            <div className='form'>
                <h4>Expense value:</h4>
                <Input placeholder="the cost.." onChange={(e) => { expenseValue.onChange(e); updateExpenseValueState() }} value={expenseValue.value} type="number" min={0} />
                <h4>Expense Stroe (optional )</h4>
                <Input placeholder="store name..." {...storeName} />
                <Line justify="around">
                    <Btn onClick={handleSubmit}>Add Expense</Btn >
                </Line>
                <Line >
                    <Btn onClick={cancelHandler}>{didTryToCancel ? "Confirm" : "Cancel"}</Btn>
                </Line>
                <div className='mag'>{cancelMessege}</div>
            </div>
        </div>
    )
}
export default View