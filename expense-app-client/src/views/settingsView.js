import useInput from 'hooks/useInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'Store/actions/users';
import { Btn, Columns, Input, Line, Rows } from 'UIKit';
import './settingsView.css'
const View = () => {
    const [submitMessage, setSubmitMessage] = useState("");
    const newName = useInput()
    const newBalance = useInput()
    const newDayofTracking = useInput()
    const validate = () => {
        return !isNaN(newDayofTracking.value) &&
            newDayofTracking.value < 29 &&
            newDayofTracking.value > 0 &&
            !isNaN(newBalance.value) &&
            newName.value.length > 5 &&
            newName.value.length < 40;
    }
    const dispatch = useDispatch()
    const clearInput = () => {
        newName.onChange({ target: { value: '' } })
        newBalance.onChange({ target: { value: '' } })
        newBalance.onChange({ target: { value: '' } })
        newDayofTracking.onChange({ target: { value: '' } })
    }
    const handleSubmit = () => {
        if (validate()) {
            dispatch(updateUser({ name: newName.value, balance: newBalance.value, dayOfTracking: newDayofTracking.value }));
            alert('detailes saved')
            clearInput()
        }
        else
            setSubmitMessage('re-ensure your input is valid')
    }

    return (
        <div className='form' >
            <h2>Change Settings</h2>
            <Columns >
                <div>
                    <Rows>
                        <h4>edit your username:</h4>
                        <Rows >
                            <h4>new balance:</h4>
                            <Rows>
                                <h4>new dat of tracking:</h4>
                            </Rows>
                        </Rows>
                    </Rows>
                </div>
                <div>
                    <Rows>
                        <Input placeholder="edit your username" {...newName} />
                        <Rows >
                            <Input placeholder="edit balance on your bank account" {...newBalance} type="number" />
                            <Rows>
                                <Input type="number" placeholder="change day of tracking" {...newDayofTracking} min={1} max={28} />
                            </Rows>
                        </Rows>
                    </Rows>
                </div>  
            </Columns>
                <Btn onClick={handleSubmit}>submit</Btn>
                    <div>{submitMessage}</div>
            
        </div >
    )
}
export default View