import userTypes from './types/userTypes';

const INITIAL_STATE = {user : null, error: null};
export default function userReducer (state = INITIAL_STATE , action){
    switch(action.type){
        case userTypes.LOGIN_SUCCESS: 
            return {...state, error: null, user: action.payload}
        case userTypes.LOGIN_FAILD:
            return {...state, error: action.payload, user: null}
        default: return state;
    }
}