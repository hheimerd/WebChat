import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {channelsReducer} from './channels/channelsReducer';
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import {applyMiddleware} from 'redux';
import {channelsWatcher} from './channels/channelSaga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    channels: channelsReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

function *rootWatcher() {
    yield all([channelsWatcher()])
}

sagaMiddleware.run(rootWatcher)