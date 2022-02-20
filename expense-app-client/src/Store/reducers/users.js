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
                const newUSer = { ...state,user:action.newUser }
                // window.sessionStorage.setItem("user",JSON.stringify(newUSer))
                return { ...state, user: newUSer }
            default: return state;
    }
}
export default reducer