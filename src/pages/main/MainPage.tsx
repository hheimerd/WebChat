import styled from 'styled-components';
import {GridArea} from '../../components/GridArea';
import {SideMenu} from './side-menu/SideMenu';
import {MainContent} from './MainContent';
import {Search} from './Search';
import {Inspector} from './right-side/Inspector/Inspector';
import {ViewTypeSelector} from './right-side/TopActions/ViewTypeSelector';

export function MainPage() {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 320px auto 244px;
  grid-template-rows: 44px 1fr;
  grid-template-areas: 
          "side-menu search top-actions"
          "side-menu main-content inspector";
  
  height: 100%;
  width: 100%;
  
`
