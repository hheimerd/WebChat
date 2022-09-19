import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ViewType} from '../../enums/ViewType';
import {Theme} from '../../enums/Theme';

const initialState = {
    theme: Theme.Dark,
    viewType: ViewType.Feed,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, acton: PayloadAction<{ theme: Theme }>) {
            state.theme = acton.payload.theme;
        },
        setViewType(state, acton: PayloadAction<{ viewType: ViewType }>) {
            state.viewType = acton.payload.viewType;
        },
    },
});

export const appReducer = appSlice.reducer;
