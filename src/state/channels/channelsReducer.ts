import type {Channel} from '../../models/Channel';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {fetchChannels} from './actionCreators';
import type {Chat} from '../../models/Chat';
import {log} from 'util';
import {current} from '@reduxjs/toolkit';
import {stat} from 'fs';

type ChannelState = {
    channels: Channel[];
    selectedChat: null | Chat;
    selectedChannel: null | Channel;
    error: string;
    isLoading: boolean;
}

const initialState: ChannelState = {
    channels: [],
    selectedChannel: null,
    selectedChat: null,
    error: '',
    isLoading: true,
};


export const channelsSlice = createSlice({
    initialState,
    name: 'channels',
    reducers: {
        selectChannel(state, action: PayloadAction<{ channel: Channel | null }>) {
            if (action.payload.channel === null) {
                state.selectedChat = null;
                state.selectedChannel = null;
                return;
            }

            if (!current(state).channels.includes(action.payload.channel)) return;

            state.selectedChannel = action.payload.channel;
            state.selectedChat = state.selectedChannel.chats[0];
        },
        selectChat(state, action: PayloadAction<{ chat: Chat }>) {
            if (current(state).selectedChannel?.chats.includes(action.payload.chat))
                state.selectedChat = action.payload.chat;
        },
    },
    extraReducers: {
        [fetchChannels.fulfilled.type]: (state, action: PayloadAction<{ channels: Channel[] }>) => {
            if (!action.payload.channels)
                return;
            state.isLoading = false;
            state.channels = action.payload.channels;
        },
        [fetchChannels.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [fetchChannels.pending.type]: (state) => {
            state.isLoading = true;
        },

    },
});

export const channelsReducer = channelsSlice.reducer;
