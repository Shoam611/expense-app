import useInput from 'hooks/useInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'Store/actions/users';
import { Btn, Dropdown, Input, Line } from 'UIKit';
import Enumerable from 'node-enumerable';
import './settingsView.css'
import useDropdown from 'hooks/useDropdown';
const View = () => {
    const [submitMessage, setSubmitMessage] = useState("");
    const list = Enumerable.range(1, 28).select(item => ({ id: item, value: item })).toArray();
    const selectedDay = useDropdown(list);
    const newName = useInput()
    const newBalance = useInput()
    const validate = () => {
        return !isNaN(selectedDay.value) &&
               !isNaN(newBalance.value) &&
            newName.value.length > 5 &&
            newName.value.length < 40;
    }
    const dispatch = useDispatch()
    const clearInput = () => {
        newName.onChange({ target: { value: '' } })
        newBalance.onChange({ target: { value: '' } })
        newBalance.onChange({ target: { value: '' } })
        selectedDay.onChange(0);
    }
    const handleSubmit = () => {
        if (validate()) {
            dispatch(updateUser({ name: newName.value, balance: newBalance.value, dayOfTracking: selectedDay.value }));
            alert('detailes saved')
            clearInput()
        }
        else
            setSubmitMessage('re-ensure your input is valid')
    }
    return (
        <div>
            <h2>Change Settings</h2>
            <div className='form' >
                <h4>new dat of tracking:</h4>
                <Dropdown {...selectedDay} />
                <h4>edit your username:</h4>
                <Input placeholder="edit your username" {...newName} />
                <h4>new balance:</h4>
                <Input placeholder="edit balance on your bank account" {...newBalance} type="number" />
                <Line justify="around">
                    <Btn onClick={handleSubmit}>submit</Btn>
                </Line>
                <Line className='msg'>{submitMessage}</Line>
            </div >
        </div >
    )
}
export default View