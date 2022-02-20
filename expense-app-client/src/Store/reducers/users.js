import { FETCHUSER, UPDATEUSER } from '../actions/users';
const initialState = {
    user: null
}
const reducer = (action, state = initialState) => {
    if (!action || !action.type) {console.log('aborting reducer'); return state;}
    switch (action.type) {
        case FETCHUSER:
            console.log('setting user to :', action.user);
            return { ...state, user:action.user ? action.user: state.user }
        case UPDATEUSER:
            console.log('updating new user',action.newUser);
            window.sessionStorage.setItem("user", action.newUser)
            return { ...state, user: action.newUser }
        default: return state;
    }
}
export default reducer