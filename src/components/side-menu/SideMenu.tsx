import {SideBar} from './Sidebar/SideBar';
import {Categories} from './Categories';
import {UserShortcutSettings} from './UserShortcutSettings/UserShortcutSettings';
import React from 'react';
import styled from 'styled-components';
import {GridArea} from '../GridArea';
import type {Category} from '../../models/Category';
import type {Channel} from '../../models/Channel';
import {styles} from '../../styles/mixins';

type SideMenuProps = {
    onChangeCategory(category: Category): void;
    currentCategory: Category | null;
    onChangeChannel(channel: Channel): void;
    currentChannel: Channel | null;
    channels: Channel[];
}

export function SideMenu({
                             channels,
                             onChangeCategory,
                             currentCategory,
                             onChangeChannel,
                             currentChannel,
                         }: SideMenuProps) {

    return (
        <SideMenuWrapper>
            <GridArea area={'side-bar'}>
                <SideBar channels={channels} onSelectChannel={onChangeChannel}/>
            </GridArea>
            <GridArea area={'categories'}>
                <Categories categories={currentChannel?.categories ?? []} selectedCategory={currentCategory}
                            onSelect={onChangeCategory}/>
            </GridArea>
            <GridArea area={'category'}>
                <SelectedCategoryHead>
                    {currentChannel?.name}
                </SelectedCategoryHead>
            </GridArea>
            <UserShortcutSettingsWrapper>
                <UserShortcutSettings/>
            </UserShortcutSettingsWrapper>
        </SideMenuWrapper>
    );
}


const SideMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 76px 1fr;
  grid-template-rows: 44px 1fr;
  grid-template-areas: 
          "side-bar category"
          "side-bar categories";

  height: 100%;
  width: 320px;

  position: relative;
`;

const UserShortcutSettingsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
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
