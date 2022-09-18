import styled from 'styled-components';
import {hexagonClip} from '../../styles/shapes';
import {HTMLAttributes} from 'react';


const HexagonWrapper = styled.div`
  ${hexagonClip};
  padding: 2px 2px 0;
  background: linear-gradient(120deg, #A73EE7, #00EBFF);
`;

const HexagonFront = styled.div`
  ${hexagonClip};
  margin: auto;
  background: var(--background-300);
`;

const Icon = styled.img`
  height: 60%;
  width: 60%;

  object-fit: contain;

  margin: 20%;
`;

export function IconInHex({
                              src,
                              size,
                              active,
                              ...other
                          }: { src: string, size?: number, active?: boolean } & HTMLAttributes<HTMLDivElement>) {
    if (!size)
        size = 32;
    return (
        <HexagonWrapper {...other} style={{height: size + 4, width: size + 4}}>
            {
                active ?
                    <Icon draggable={false} src={src}/>

                    :
                    <HexagonFront style={{height: size, width: size}}>
                        <Icon draggable={false} src={src}/>
                    </HexagonFront>
            }
        </HexagonWrapper>
    );
}