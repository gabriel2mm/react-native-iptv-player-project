import { all, takeLatest, put, call} from 'redux-saga/effects'
import vodsTypes from '../../reducers/types/vodsTypes'
import axios from 'axios'
import buildUrl from '../../utils/buildUrl'


function* fetchCategories(action){
    const {host, username, password} = action.payload;
    try{
        const {host, username, password, action_vod} = action.payload;
        const response = yield call(axios.get, buildUrl(host + '/player_api.php', { username, password, action: 'get_vod_categories'}))
        if(response.status != 200){
            yield put({type: vodsTypes.FETCH_FAILD_CATEGORY_VODS, payload: 'Não foi possível carregar os Vods!'})
        }else{
            yield put({type: vodsTypes.FETCH_SUCCESS_CATEGORY_VODS, payload: response.data})
        }
    }catch(e){
        yield put({type: vodsTypes.FETCH_FAILD_CATEGORY_VODS, payload: e})
    }
}

function* fetchAllVods(action){
    try{
        const {host, username, password, action_vod} = action.payload;
        const response = yield call(axios.get, buildUrl(host + '/player_api.php', { username, password, action: action_vod}))
        console.log(response)
        if(response.status != 200){
            yield put({type: vodsTypes.FETCH_FAILD_ALL_VODS, payload: 'Não foi possível carregar os Vods!'})
        }else{
            yield put({type: vodsTypes.FETCH_SUCCESS_ALL_VODS, payload: response.data})
        }
    }catch(e){
        yield put({type: vodsTypes.FETCH_FAILD_ALL_VODS, payload: e})
    }
}

export function* VodsWatch(){
    yield all([
        takeLatest(vodsTypes.ASYNC_FETCH_ALL_VODS, fetchAllVods),
        takeLatest(vodsTypes.ASYNC_FETCH_CATEGORY_VODS, fetchCategories)
    ])
}

