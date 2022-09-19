import {useEffect} from 'react';
import {Search} from './components/Search';
import {SideMenu} from './components/side-menu/SideMenu';
import {MainContent} from './components/MainContent';
import {Inspector} from './components/right-side/Inspector/Inspector';
import styled from 'styled-components';
import {GridArea} from './components/GridArea';
import {ViewTypeSelector} from './components/right-side/TopActions/ViewTypeSelector';
import {useMouse} from './hooks/useMouse';
import {useAppSelector} from './hooks/redux';
import {useAppDispatch} from './hooks/redux';
import {fetchChannels} from './state/channels/actionCreators';
import {animated} from 'react-spring';
import {useSpring} from '@react-spring/web';
import {Theme} from './enums/Theme';
import {userActions} from './state/user/userReducer';

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

function App() {
    const theme = useAppSelector(state => state.app.theme);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchChannels());
        dispatch(userActions.login())
    }, []);

    const [appWrapperStyles, appWrapperStylesApi] = useSpring(() => ({
        backgroundPosition: ``,
    }));

    useMouse(({x, y}) => {
        appWrapperStylesApi.set({
            backgroundPosition: `${(y / window.screen.width) * 140}% ${(x / window.screen.width) * 100}%`,
        });
    });


    return (
        <AppWrapper as={animated.div} style={appWrapperStyles} className={theme === Theme.Dark ? 'theme-dark' : 'theme-light'}>
            <GridArea area={'side-menu'}>
                <SideMenu/>
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
                <ViewTypeSelector/>
            </GridArea>
        </AppWrapper>
    );
}

export default App;
