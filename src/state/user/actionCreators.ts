import {createAsyncThunk} from '@reduxjs/toolkit';
import type {User} from '../../models/User';

export const login = createAsyncThunk('user/login', () => {
    return <User>{
        avatar: 'favicon.ico',
        name: 'Sanita',
        surname: 'Lava',
        nickname: 'sophiefortune',
    }
})