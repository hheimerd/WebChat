import type {Channel} from '../../models/Channel';
import type {ChannelAction} from './channelActions';
import {ChannelActionType} from './ChannelActionType';

type ChannelState = {
    channels: Channel[],
    selectedChannel: null | Channel
}

const defaultState: ChannelState = {
    channels: [],
    selectedChannel: null
}

export function channelsReducer(state = defaultState, action: ChannelAction): ChannelState {
    switch (action.type) {
        case ChannelActionType.setChannels:
            return {...state, channels: action.payload.channels}
        case ChannelActionType.selectChannel:
            if (state.channels.includes(action.payload.channel))
                return {...state, selectedChannel: action.payload.channel}
            else
                return state;
        default: return state;
    }
}