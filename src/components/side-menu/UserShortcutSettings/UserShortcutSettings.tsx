import styled from 'styled-components';
import {useState} from 'react';
import {useRef} from 'react';
import {styles} from '../../../styles/mixins';
import {AvatarImage} from '../../shared/AvatarImage';
import {IconInHex} from '../../shared/IconInHex';
import {useEventListener} from '../../../hooks/useEventListener';
import {MicSettings} from './MicSettings';
import micImg from './mic.svg';
import headphonesImg from './headphones.svg';
import addUserImg from './addUser.svg';
import {useAppSelector} from '../../../hooks/redux';

enum UserShortcutMenu {
    None,
    Mic,
    Sound,
    AddUser,
}


export function UserShortcutSettings() {
    const [activeButton, setActiveButton] = useState(UserShortcutMenu.None);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const user = useAppSelector(state => state.user.user);

    useEventListener('mousedown', (e) => {
        if (wrapperRef.current?.contains(e.target as Node))
            return;
        setActiveButton(UserShortcutMenu.None);
    });

    return (
        <Wrapper ref={wrapperRef}>
            <SettingWrapper style={{
                clipPath: activeButton === UserShortcutMenu.None ? 'inset(100% 0 0 0)' : 'inset(0 0 0 0)',
            }}>
                {activeButton === UserShortcutMenu.Mic && <MicSettings/>}
            </SettingWrapper>

            <UserWrapper>
                {
                    user &&
                    <>
                        <AvatarImage src={user.avatar} size={32}/>
                        <NickName>
                            {user.nickname}
                        </NickName>
                    </>
                }
            </UserWrapper>

            <ButtonsWrapper>
                {activeButton !== UserShortcutMenu.None &&
                    <SelectionTriangle style={{transform: `translateX(${2.5 * (activeButton - 1)}rem)`}}/>
                }


                <IconInHex
                    active={activeButton === UserShortcutMenu.Mic}
                    src={micImg}
                    onClick={() => setActiveButton(UserShortcutMenu.Mic)}
                />
                <IconInHex
                    active={activeButton === UserShortcutMenu.Sound}
                    src={headphonesImg}
                    onClick={() => setActiveButton(UserShortcutMenu.Sound)}
                />
                <IconInHex
                    active={activeButton === UserShortcutMenu.AddUser}
                    src={addUserImg}
                    onClick={() => setActiveButton(UserShortcutMenu.AddUser)}
                />
            </ButtonsWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  ${styles.fluent}
  ${styles.row};
  position: relative;
  justify-content: space-between;

  height: 72px;
  padding: 20px 12px;

  background: rgba(var(--background-400-rgb), 0.8);
`;

const SettingWrapper = styled.div`
  ${styles.fluent}

  transition: 0.4s;
  position: absolute;
  bottom: 72px;
  left: 0;
  width: 100%;

  background: rgba(var(--background-500-rgb), 0.5);

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const SelectionTriangle = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 6px;
  margin: 0 0.5rem;

  transition: 0.3s;

  clip-path: polygon(0 0, 100% 0, 55% 98%, 50% 100%, 45% 98%, 0 0);
  background: rgba(var(--background-500-rgb), 0.5);
`;

const NickName = styled.span`
  font-size: var(--text-h4);
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserWrapper = styled.div`
  ${styles.row};

  gap: 0.5rem;
`;

const ButtonsWrapper = styled.div`
  ${styles.row};
  gap: 4px;

  & > * {
    cursor: pointer;
  }
`;