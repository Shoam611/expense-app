import axios from "axios";
import useSessionStorage from "hooks/useSessionStorage";

export const FETCHUSER = "FETCHUSER";
export const UPDATEUSER = "UPDATEUSER";
export const fetchUser = () => {
    return async (dispatch, getState) => {
        if (getState().users.user != null) { console.log('user already logged in', getState().users.user); dispatch({ type: 'x' }); }
        else {
            const sessionUser = getUser();
            if (sessionUser) {
                dispatch({ type: FETCHUSER, user: sessionUser });
            }
            else {
                const defaultUser = await (await axios.get('http://localhost:8080/defaultUser')).data;
                window.sessionStorage.setItem("user",JSON.stringify(defaultUser));

                dispatch({ type: FETCHUSER, user: defaultUser });
            }
        }
    }
}
const getUser = () => {
    const storedValue = window.sessionStorage.getItem("user");
    return storedValue
}
export const updateUser = (newData) => {
    return async (dispatch, getState) => {
        const user = getState().users.user;
        if (!user) {}
        else {
            const response = await (await axios.put('http://localhost:8080/defaultUser', { id: user._id, ...newData }));
            // const data = response.data;
            console.log("update response", response.status);
            dispatch({ type: UPDATEUSER, newData })
        }
    }
}