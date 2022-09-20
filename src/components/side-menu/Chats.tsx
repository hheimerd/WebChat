import styled from 'styled-components';
import type {Chat} from '../../models/Chat';
import {styles} from '../../styles/mixins';


export type CategoriesProps = {
    chats: Chat[],
    onSelect(category: Chat): void,
    selectedChat: Chat | null
}

export function Chats({chats, selectedChat, onSelect}: CategoriesProps) {
    return (
        <Wrapper>

            {selectedChat && <CategoryItemSelection
                style={{transform: `translateY(${40 * chats.indexOf(selectedChat)}px)`}}/>}

            {
                chats.map(chat => (
                    <ChatItem
                        key={chat.id}
                        onClick={() => onSelect(chat)}
                    >
                        <CategoryItemIco src={chat.icon}/>
                        <CategoryItemName>
                            {chat.name}
                        </CategoryItemName>
                    </ChatItem>
                ))
            }

        </Wrapper>
    );
}

const Wrapper = styled.div`
  background: rgba(var(--background-300-rgb), 0.5);
  height: 100%;
  padding: 1rem;

  gap: 2px;

  ${styles.fluent}
`;


const ChatItem = styled.div`
  & * {
    z-index: 20;
  }

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  width: 212px;
  height: 40px;
  border-radius: 5px;
  padding: 0.5rem;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    color: var(--primary)
  }
`;

const CategoryItemSelection = styled.div`
  z-index: 10;
  width: 212px;
  height: 40px;
  border-radius: 5px;

  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  transition: 0.5s;
`;

const CategoryItemIco = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const CategoryItemName = styled.span`
  font-size: var(--text-h3);
`;