import styled from 'styled-components';
import {Logo} from '../../shared/Logo';
import {styles} from '../../../styles/mixins';
import type {Channel} from '../../../models/Channel';
import {useState} from 'react';
import addIcon from './add-group.png';
import {hexagonClip} from '../../../styles/shapes';

type SidebarProps = {
    channels: Channel[],
    onSelectChannel: (channel: Channel) => void;
}


export function SideBar({channels, onSelectChannel}: SidebarProps) {
    const [selectedChannel, setSelectedChannel] = useState(channels[0]);

    function selectChannel(channel: Channel) {
        setSelectedChannel(channel);
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
                    <SelectionWrapper style={{transform: `translateY(${4 * channels.indexOf(selectedChannel)}rem)`}}>
                        <SelectionGizmoBorder
                            style={{transform: `rotate(${30 + 60 * channels.indexOf(selectedChannel)}deg)`}}>
                            <SelectionGizmoColor/>
                        </SelectionGizmoBorder>
                        <SelectionShadow/>
                    </SelectionWrapper>

                    {
                        channels.map(channel => (
                            <ChannelIcon title={channel.name} src={channel.icon} key={channel.id}
                                         onClick={() => selectChannel(channel)}/>
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

const SelectionWrapper = styled.div`
  transition: 0.5s;
  position: absolute;
  top: -18px;
  right: 2px;
`;

const SelectionGizmoBorder = styled.div`
  width: 75px;
  height: 75px;

  transition: 0.5s;
  background: #fff;
  ${hexagonClip};
`;

const SelectionGizmoColor = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;

  width: 72px;
  height: 72px;

  background: linear-gradient(#C441F4, #00DAEA);
  ${hexagonClip};
`;

const SelectionShadow = styled.div`
  position: absolute;
  top: 0;
  clip-path: polygon(92.32% 39.75%, 93.79% 42.91%, 94.7% 46.28%, 95% 49.75%, 94.7% 53.22%, 93.79% 56.59%, 92.32% 59.75%, 79.82% 81.4%, 77.82% 84.26%, 75.36% 86.72%, 72.5% 88.72%, 69.34% 90.19%, 65.97% 91.1%, 62.5% 91.4%, 37.5% 91.4%, 33.08% 91.3%, 29.7% 89.44%, 27.79% 86.96%, 26.44% 83.96%, 25.22% 81.25%, 24.97% 78.14%, 24.6% 73.5%, 23.6% 69.71%, 21.35% 65.17%, 19.19% 61.97%, 16.53% 60.01%, 13.22% 57.46%, 11.5% 55.56%, 9.02% 53.38%, 7.04% 49.96%, 6.59% 46.49%, 7.64% 42.75%, 8.43% 39.75%, 20.18% 18.1%, 22.18% 15.24%, 24.64% 12.78%, 27.5% 10.78%, 30.66% 9.31%, 34.03% 8.4%, 37.5% 8.1%, 62.5% 8.1%, 65.97% 8.4%, 69.34% 9.31%, 72.5% 10.78%, 75.36% 12.78%, 77.82% 15.24%, 79.82% 18.1%);
  transform: rotate(30deg) translateZ(-1px);

  background: rgba(var(--background-400-rgb), 0.4);
  width: 75px;
  height: 75px;
`;


const ChannelIcon = styled.img`
  z-index: 1;
  position: relative;
  border-radius: 100%;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

const ChannelsBarSvg = (
    <svg className="svg" height={100} width={73}>
        <path
            d="M69 102.458H1C1 87.287 7.65879 73.021 18.9348 64.0335L51.0652 38.4248C62.3412 29.4375 69 15.1713 69 0V102.458Z"
            stroke="#9481bf" strokeWidth="1"
            fill="rgba(var(--background-400-rgb), 0.4)"
            strokeLinecap="round"/>
    </svg>
);

const ChannelsWrapper = styled.div`
  position: relative;
  ${styles.column};
  padding-left: 0.5rem;
  gap: 1.5rem;

  margin-right: -1px;
  width: 68px;

  background: rgba(var(--background-400-rgb), 0.4);
  border-left: 1px solid #9481bf;
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