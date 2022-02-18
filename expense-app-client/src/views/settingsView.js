import useInput from 'hooks/useInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'Store/actions/users';
// import { useSelector } from 'react-redux';
import { Input, Line } from 'UIKit';
import './settingsView.css'
const View = (props) => {
    // const user = useSelector(state => state.users.user);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(updateUser({ name: newName.value, balance: newBalance.value, dayOfTracking: newDayofTracking.value }));
            alert('detailes saved')
            clearInput()
        }
        else
            setSubmitMessage('re-ensure your input is valid')
    }

    return (
        <div >
            <h2>Change Settings</h2>
            <form onSubmit={handleSubmit}>
                <Line>
                    <h4>edit your username:</h4>
                    <Input placeholder="edit your username" {...newName} />
                </Line>
                <Line>
                    <h4>new balance:</h4>
                    <Input placeholder="edit balance on your bank account" {...newBalance} type="number" />
                </Line>
                <Line>
                    <h4>new dat of tracking:</h4>
                    <Input type="number" placeholder="change day of tracking" {...newDayofTracking} min={1} max={28} />
                </Line>
                <Input type="submit" value="submit" />
                <Line>
                    <div>{submitMessage}</div>
                </Line>
            </form>
        </div>
    )
}
export default View