import axios from "axios";

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
                window.sessionStorage.setItem("user", JSON.stringify(defaultUser));
                dispatch({ type: FETCHUSER, user: defaultUser });
            }
        }
    }
}
const getUser = () => {
    const storedValue = window.sessionStorage.getItem("user");
    return JSON.parse(storedValue);
}

export const updateUser = (newData) => {
    return async (dispatch, getState) => {
        let user = getState().users.user;
        console.log('in update user', user);
        if (!user) {
            user = JSON.parse(window.sessionStorage.getItem("user"));
            console.log('in update user', user);
            if (!user) {
                await dispatch(fetchUser());
                user = getState().users.user;
                console.log('in update user', user);
            }
        }
        const newUser = { ...user, ...newData };
        const response = (await axios.put('http://localhost:8080/defaultUser', { id: user._id, newUser }));
        console.log("update response", response.status,newUser);
        dispatch({ type: UPDATEUSER, newUser })
    }
}