import {MockChannelRepository} from '../../repositories/ChannelRepository/MockChannelRepository';
import {createAsyncThunk} from '@reduxjs/toolkit';

const channelRepository = new MockChannelRepository();

export const fetchChannels = createAsyncThunk('fetchUsers', async (_, thunkAPI) => {
    try {
        return {channels: await channelRepository.getChannels()};
    } catch (e) {
        return e instanceof Error ? e.message : JSON.stringify(e);
    }
});