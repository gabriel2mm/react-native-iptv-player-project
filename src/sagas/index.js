import {all} from 'redux-saga/effects'
import {LoginWatch} from './watch/loginWatch'
import {VodsWatch} from './watch/vodsWatch'

export default function* rootSaga() {
    yield all([
        LoginWatch(),
        VodsWatch()
    ])
  }