import {call, put, takeEvery} from 'redux-saga/effects';
import {ChannelActionType} from './ChannelActionType';
import {delay} from '../../utils/delay';
import {MockChannelRepository} from '../../repositories/ChannelRepository/MockChannelRepository';
import type {ChannelRepository} from '../../repositories/ChannelRepository';
import type {Channel} from '../../models/Channel';
import {setChannelsAction} from './channelActions';

const channelRepository: ChannelRepository = new MockChannelRepository();

function* fetchChannelsWorker() {
    yield delay(3000);
    const channels: Channel[] = yield call(channelRepository.getChannels);
    yield put(setChannelsAction(channels));
}


export function* channelsWatcher() {
    yield takeEvery(ChannelActionType.fetchChannels, fetchChannelsWorker);
}