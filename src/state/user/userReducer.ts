import {createSlice} from '@reduxjs/toolkit';
import type {User} from '../../models/User';
import type {PayloadAction} from '@reduxjs/toolkit';
import * as asyncActions from './actionCreators';

type UserState = {
    user: User | null
}

const initialState: UserState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {
        [asyncActions.login.fulfilled.type]: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        }
    }
})


export const userActions = {
    ...userSlice.actions,
    ...asyncActions
}
export const userReducer = userSlice.reducer;
