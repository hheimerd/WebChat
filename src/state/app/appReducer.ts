import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {themes} from '../../context/ThemeContext';
import {ViewType} from '../../enums/ViewType';

const initialState = {
    theme: themes.dark,
    viewType: ViewType.Feed,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, acton: PayloadAction<{ theme: typeof themes.dark | typeof themes.light }>) {
            state.theme = acton.payload.theme;
        },
        setViewType(state, acton: PayloadAction<{ viewType: ViewType }>) {
            state.viewType = acton.payload.viewType;
        },
    },
});

export const appReducer = appSlice.reducer;
