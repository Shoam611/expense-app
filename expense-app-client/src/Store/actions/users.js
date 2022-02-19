import axios from "axios";

export const FETCHUSER = "FETCHUSER";
export const UPDATEUSER = "UPDATEUSER";
export const fetchUser = () => {
    return async (dispatch, getState) => {
        if (getState().users.user != null) { console.log('user already logged in', getState().users.user); return; }
        const defaultUser = await (await axios.get('http://localhost:8080/defaultUser')).data;
        // const today = new Date();
        // const minDate = new Date(today.getFullYear(), today.getMonth(), defaultUser.dayOfTracking)
        // const maxDate = new Date(minDate.getFullYear(), minDate.getMonth() + 1, minDate.getDay())
        dispatch({ type: FETCHUSER, defaultUser });
    }
}
export const updateUser = (newData) => {
    return async (dispatch, getState) => {
        console.log('in update user');
        const user = getState().users.user;
        if (!user) {console.log('no user is registerd');}
        else {
            const response = await (await axios.put('http://localhost:8080/defaultUser', { id: user._id, ...newData })).data;
            console.log(response);
            dispatch({ type: UPDATEUSER, newData })
        }
    }
}