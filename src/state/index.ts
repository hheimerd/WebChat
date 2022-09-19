import {channelsReducer} from './channels/channelsReducer';
import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from './app/appReducer';
import {userReducer as userReducer} from './user/userReducer';

export function setupStore() {
    return configureStore({
        reducer: {
            channels: channelsReducer,
            app: appReducer,
            user: userReducer
        },
    });
}

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']

export const store = setupStore();
