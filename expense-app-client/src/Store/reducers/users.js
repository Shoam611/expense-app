import { FETCHUSER, UPDATEUSER } from '../actions/users';
const initialState = {
    user: null
}
const reducer = (action, state = initialState) => {
    if (!action || !action.type) return state;
    switch (action.type) {
        case FETCHUSER:
            console.log('setting user to :', action.user);
            return { ...state, user:action.user ? action.user: state.user }
        case UPDATEUSER:
            const newUSer = { ...state.user, ...action.newData }
            window.sessionStorage.setItem("user", newUSer)
            return { ...state, user: newUSer }
        default: return state;
    }
}
export default reducer