import { FETCHUSER } from '../actions/users';
const initialState = {
    user:null
}
 const reducer=(action ,state=initialState) => {
    if(!action){
        return state;
    }
    switch(action.type){
        case FETCHUSER :  return {...state,user:action.defaultUser ? action.defaultUser : state.user, }
        default : return state;
    }
}
export default reducer