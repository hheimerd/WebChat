import {SideBar} from './Sidebar/SideBar';
import {Chats} from './Chats';
import {UserShortcutSettings} from './UserShortcutSettings/UserShortcutSettings';
import React from 'react';
import styled from 'styled-components';
import {GridArea} from '../../../components/GridArea';
import {styles} from '../../../styles/mixins';
import {useAppDispatch} from '../../../hooks/redux';
import {useAppSelector} from '../../../hooks/redux';
import {channelsSlice} from '../../../state/channels/channelsReducer';
import type {Chat} from '../../../models/Chat';
import type {Channel} from '../../../models/Channel';
import {useAppTranslation} from '../../../hooks/useAppTranslation';

export function SideMenu() {
    const { t } = useAppTranslation();

    const dispatch = useAppDispatch();
    const channels = useAppSelector(state => state.channels.channels);
    const currentChannel = useAppSelector(state => state.channels.selectedChannel);
    const currentChat = useAppSelector(state => state.channels.selectedChat)
    const chats = useAppSelector(state => state.channels.selectedChannel?.chats)

    function onChangeChannel(channel: Channel | null) {
        dispatch(channelsSlice.actions.selectChannel({channel}))
    }

    function onChangeChat(chat: Chat) {
        dispatch(channelsSlice.actions.selectChat({chat}))
    }

    return (
        <SideMenuWrapper>
            <GridArea area={'side-bar'}>
                <SideBar selectedChannel={currentChannel} channels={channels} onSelectChannel={onChangeChannel}/>
            </GridArea>
            <GridArea area={'categories'}>
                <Chats chats={chats ?? []} selectedChat={currentChat}
                       onSelect={onChangeChat}/>
            </GridArea>
            <GridArea area={'category'}>
                <SelectedCategoryHead>
                    {currentChannel?.name || t('sidebar.messages_title')}
                </SelectedCategoryHead>
            </GridArea>
            <GridArea area={'userSettings'}>
                <UserShortcutSettings/>
            </GridArea>
        </SideMenuWrapper>
    );
}


const SideMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 76px 1fr;
  grid-template-rows: 44px 1fr;
  grid-template-areas: 
          "side-bar category"
          "side-bar categories"
          "userSettings userSettings";

  height: 100%;
  width: 320px;

  position: relative;
`;

const SelectedCategoryHead = styled.div`
  ${styles.fluent}
  height: 100%;
  width: 100%;

  background: rgba(var(--background-300-rgb), 0.5);
  box-shadow: inset 0 -1px 0 0 var(--divider-color);
  color: rgba(var(--text-color-rgb), 1);
  font-size: var(--text-h2);
  font-weight: bold;
  padding: 12px 0 0 16px;
`;
