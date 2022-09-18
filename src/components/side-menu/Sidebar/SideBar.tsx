import styled from 'styled-components';
import {Logo} from '../../shared/Logo';
import {styles} from '../../../styles/mixins';
import type {Channel} from '../../../models/Channel';
import addIcon from './add-group.png';

type SidebarProps = {
    channels: Channel[],
    onSelectChannel: (channel: Channel) => void,
    selectedChannel: Channel | null
}

export function SideBar({channels, selectedChannel, onSelectChannel}: SidebarProps) {

    function selectChannel(channel: Channel) {
        onSelectChannel(channel);
    }

    return (
        <Wrapper>
            <Buttons>
                <Button style={{background: '#ED695E'}}></Button>
                <Button style={{background: '#F4BF4F'}}></Button>
                <Button style={{background: '#61C554'}}></Button>
            </Buttons>
            <Logo/>


            <ChannelsBar>
                <ChannelsBarFigure>
                    {ChannelsBarSvg}
                </ChannelsBarFigure>
                <ChannelsWrapper>
                    {
                        channels.map(channel => (
                            <ChannelSelectorItem key={channel.id} selected={channel === selectedChannel}>
                                <ChannelIcon title={channel.name} src={channel.icon}
                                             onClick={() => selectChannel(channel)}/>
                                <SelectionIndicator />
                            </ChannelSelectorItem>

                        ))
                    }
                    <ChannelIcon src={addIcon}/>


                </ChannelsWrapper>
                <ChannelsBarFigure style={{transform: 'scaleY(-1)'}}>
                    {ChannelsBarSvg}
                </ChannelsBarFigure>

            </ChannelsBar>

        </Wrapper>
    );
}

const ChannelIcon = styled.img`
  position: relative;
  border-radius: 100%;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

const SelectionIndicator = styled.div`
  position: absolute;
  width: 5px;
  right: 0;
  border-radius: 10px 0 0 10px;
  background: rgba(var(--text-color-rgb), 0.6);
  transition: 0.3s;
`;

const ChannelSelectorItem = styled.div<{selected: boolean}>`
  ${styles.row}
  gap: 0.3rem;
  ${SelectionIndicator} {
    height: ${props => props.selected ? 40 : 8 }px;  
  }
  
  &:hover ${SelectionIndicator} {
    height: ${props => props.selected ? 40 : 21 }px;
  }
`;

const ChannelsBarSvg = (
    <svg className="svg" height={100} width={68}>
        <path
            d="M69 102.458H1C1 87.287 7.65879 73.021 18.9348 64.0335L51.0652 38.4248C62.3412 29.4375 69 15.1713 69 0V102.458Z"
            fill="rgba(var(--background-400-rgb), 0.4)"
            strokeLinecap="round"/>
    </svg>
);

const ChannelsWrapper = styled.div`
  position: relative;
  ${styles.centredColumn};

  gap: 1.5rem;

  margin-left: 1px;
  width: 67px;

  background: rgba(var(--background-400-rgb), 0.4);
`;

const ChannelsBar = styled.div`
  position: absolute;
  right: 0;
  top: 2rem;
`;

const ChannelsBarFigure = styled.div`
  height: 100px;
  width: 68px;
`;

const Wrapper = styled.div`
  position: relative;
  ${styles.column}

  height: 100%;
  width: 100%;
  padding-top: 12px;
  align-items: center;

  background: rgba(var(--background-400-rgb), 0.3);
`;

const Buttons = styled.div`
  ${styles.row}
  gap: 8px;
  margin-bottom: 0.5rem;
`;

const Button = styled.div`
  height: 12px;
  width: 12px;

  background: white;
  border-radius: 100%;

  cursor: pointer;
`;