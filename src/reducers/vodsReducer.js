import vodsTypes from './types/vodsTypes'
const INITIAL_STATE = { vods: [], categories: [], error: "" }

export default function vodsReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case vodsTypes.FETCH_SUCCESS_ALL_VODS: 
            return {...state, vods: action.payload, error: null}
        case vodsTypes.FETCH_FAILD_ALL_VODS:
            return {...state, vods: null, error: action.payload}
        case vodsTypes.FETCH_SUCCESS_CATEGORY_VODS: 
            return  {...state, error: null, categories: action.payload}
        case vodsTypes.FETCH_FAILD_CATEGORY_VODS:
            return {...state, vods: [], categories: [], error: action.payload}
        default: 
            return {...state}
    }
}