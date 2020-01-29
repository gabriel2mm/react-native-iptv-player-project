import { put, takeLatest, all, call } from 'redux-saga/effects'
import userTypes from '../../reducers/types/userTypes'
import buildUrl from '../../utils/buildUrl'
import axios from 'axios'

function* login(action) {
    try {

        const { host, username, password } = action.payload;
        console.log(buildUrl(host + '/player_api.php', { username, password }));
        const response = yield call(axios.get, buildUrl(host + '/player_api.php', { username, password }))
        if(response.status != 200){
            yield put({ type: userTypes.LOGIN_FAILD, payload: 'Não foi possível realizar login, Tente novamente!' })
        }else{
            yield put({ type: userTypes.LOGIN_SUCCESS, payload: {...response.data.user_info , host} })
        }
    } catch (e) {
        yield put({ type: userTypes.LOGIN_FAILD, payload: 'Não foi possível realizar login, Tente novamente!'})
    }   
}

export function* LoginWatch() {
    yield all([
        takeLatest(userTypes.ASYNC_LOGIN, login),
    ])
}