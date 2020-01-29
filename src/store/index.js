import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/index'
import rootSagas from '../sagas/index'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSagas);

export default store;
