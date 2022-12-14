import styled from 'styled-components';
import bellIcon from './Bell.svg';
import chatIcon from './Chat.svg';
import mailIcon from './Mail.svg';
import settingIcon from './Setting.svg';
import {useAppDispatch} from '../../../../hooks/redux';
import {useAppSelector} from '../../../../hooks/redux';
import {appSlice} from '../../../../state/app/appReducer';
import {ViewType} from '../../../../enums/ViewType';

export function ViewTypeSelector() {
    const dispatch = useAppDispatch();
    const activeViewType = useAppSelector(state => state.app.viewType)

    function selectAction(actionMenu: ViewType) {
        dispatch(appSlice.actions.setViewType({viewType: actionMenu}))
    }

    return (
        <Wrapper>
            <ActionButton onClick={() => selectAction(ViewType.Feed)} active={activeViewType === ViewType.Feed}>
                <img src={mailIcon}/>
            </ActionButton>
            <ActionButton onClick={() => selectAction(ViewType.Chat)} active={activeViewType === ViewType.Chat}>
                <img src={bellIcon}/>
            </ActionButton>
            <ActionButton onClick={() => selectAction(ViewType.Notifications)}
                          active={activeViewType === ViewType.Notifications}>
                <img src={chatIcon}/>
            </ActionButton>
            <ActionButton onClick={() => selectAction(ViewType.Settings)} active={activeViewType === ViewType.Settings}>
                <img src={settingIcon}/>
            </ActionButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  padding: 0.5rem 0.75rem;

  background: rgba(var(--background-300-rgb), 0.5);
  box-shadow: inset 1px -1px 0 var(--divider-color);
`;

const ActionButton = styled.button<{ active?: boolean }>`
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 100%;
  border: 2px solid transparent;
  padding: 1px;
  cursor: pointer;

  border: 2px solid ${props => props.active ? 'rgba(var(--text-color-rgb), 0.3)' : 'transparent'};
  background: ${props => props.active ? 'rgba(var(--text-color-rgb), 0.3)' : 'transparent'};

  &:hover {
    background: rgba(var(--text-color-rgb), 0.2)
  }

  & > img {
    object-fit: cover;
    width: 105%;
  }
`;