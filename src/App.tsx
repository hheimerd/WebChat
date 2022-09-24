import {useEffect} from 'react';
import styled from 'styled-components';
import {useMouse} from './hooks/useMouse';
import {useAppSelector} from './hooks/redux';
import {useAppDispatch} from './hooks/redux';
import {fetchChannels} from './state/channels/actionCreators';
import {animated} from 'react-spring';
import {useSpring} from '@react-spring/web';
import {Theme} from './enums/Theme';
import {userActions} from './state/user/userReducer';
import {MainPage} from './pages/main/MainPage';

const AppWrapper = styled.div`
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
        dispatch(userActions.login());
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
        <AppWrapper as={animated.div} style={appWrapperStyles}
                    className={theme === Theme.Dark ? 'theme-dark' : 'theme-light'}>
            <MainPage/>
        </AppWrapper>
    );
}

export default App;
