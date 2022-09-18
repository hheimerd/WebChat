import {ChannelActionType} from './ChannelActionType';
import type {Channel} from '../../models/Channel';

export const fetchChannelsAction = () => ({
    type: ChannelActionType.fetchChannels as const,
});

export const setChannelsAction = (channels: Channel[]) => ({
    type: ChannelActionType.setChannels as const,
    payload: {
        channels,
    },
});

export const selectChannelAction = (channel: Channel) => ({
    type: ChannelActionType.selectChannel as const,
    payload: {
        channel,
    },
});

export const addChannelAction = (channel: Channel) => ({
    type: ChannelActionType.addChannel as const,
    payload: {
        channel,
    },
});

export type ChannelAction =
    | ReturnType<typeof fetchChannelsAction>
    | ReturnType<typeof setChannelsAction>
    | ReturnType<typeof selectChannelAction>
    | ReturnType<typeof addChannelAction>