import styled from 'styled-components';
import {hexagonClip} from '../../styles/shapes';


const HexagonImage = styled.img`
  ${hexagonClip};
  margin: auto;
  background: var(--background-300);
`;

const HexagonWrapper = styled.div`
  ${hexagonClip};
  padding: 2px 2px 0;
  background: linear-gradient(120deg, #A73EE7, #00EBFF);
`;

export function ImageInHex({src, size}: { src: string, size?: number }) {
    if (!size)
        size = 32;
    return (
        <HexagonWrapper style={{height: size + 4, width: size + 4}}>
            <HexagonImage draggable={false} src={src} height={size} width={size}/>
        </HexagonWrapper>
    );
}