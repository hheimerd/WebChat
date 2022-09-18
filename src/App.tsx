import {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {ThemeContext} from './context/ThemeContext';
import {themes} from './context/ThemeContext';
import {Search} from './components/Search';
import {SideMenu} from './components/side-menu/SideMenu';
import {MainContent} from './components/MainContent';
import {Inspector} from './components/right-side/Inspector/Inspector';
import styled from 'styled-components';
import {GridArea} from './components/GridArea';
import {ViewTypeSelector} from './components/right-side/TopActions/ViewTypeSelector';
import {ViewType} from './components/right-side/TopActions/ViewTypeSelector';
import {useMouse} from './hooks/useMouse';
import type {Channel} from './models/Channel';
import type {Category} from './models/Category';
import type {ChannelRepository} from './repositories/ChannelRepository';
import {MockChannelRepository} from './repositories/ChannelRepository/MockChannelRepository';

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 320px auto 244px;
  grid-template-rows: 44px 1fr;
  grid-template-areas: 
          "side-menu search top-actions"
          "side-menu main-content inspector";

  border-radius: 16px;

  color: var(--text-color);

  width: 100vw;
  height: 100vh;

  background: linear-gradient(24deg, #e9bff8, #7859d1);
  backdrop-filter: blur(10px);
  background-size: 150% 150%;
  transform: translate3d(0, 0, 0);
`;

const MouseFollower = styled.div`
  position: absolute;

  height: 100px;
  width: 100px;
  transform: translate(-50px, -50px);

  background: white;
  border-radius: 100%;
`;

function App() {
    const [theme, setTheme] = useState(themes.dark);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [channels, setChannels] = useState<Channel[]>([]);
    const [selectedChannel, setSelectedChannel] = useState<Channel | null>(channels[0] ?? null);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(selectedChannel?.categories?.[0] ?? null);
    const [viewType, setViewType] = useState(ViewType.Feed);

    useEffect(() => {
        const channelsRepository: ChannelRepository = new MockChannelRepository();
        setChannels(channelsRepository.getChannels());
    }, []);

    useEffect(() => {
        setSelectedChannel(channels[0] ?? null);
    }, [channels])


    useEffect(() => {
        setSelectedCategory(selectedChannel?.categories[0] ?? null);
    }, [selectedChannel]);


    useMouse(({x, y}) => {
        wrapperRef.current!.style.backgroundPosition = `${(y / window.screen.width) * 140}% ${(x / window.screen.width) * 100}%`;
    });

    function toggleStyle() {
        setTheme(theme === themes.dark ? themes.light : themes.light);
    }


    return (
        <ThemeContext.Provider value={{styles: theme, toggleStyle}}>

            <AppWrapper className={theme.bodyClassName} ref={wrapperRef}>
                <GridArea area={'side-menu'}>
                    <SideMenu channels={channels}
                              onChangeCategory={setSelectedCategory} onChangeChannel={setSelectedChannel}
                              currentCategory={selectedCategory} currentChannel={selectedChannel}/>
                </GridArea>
                <GridArea area={'main-content'}>
                    <MainContent/>
                </GridArea>
                <GridArea area={'search'}>
                    <Search/>
                </GridArea>
                <GridArea area={'inspector'}>
                    <Inspector/>
                </GridArea>
                <GridArea area={'top-actions'}>
                    <ViewTypeSelector onSelectActionView={setViewType}/>
                </GridArea>
            </AppWrapper>


        </ThemeContext.Provider>
    );
}

export default App;
