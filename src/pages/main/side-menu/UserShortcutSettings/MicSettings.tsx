import styled from 'styled-components';
import equalizerPlaceholder from './equalizerPlaceholder.svg';


export function MicSettings() {

    return (
        <Wrapper>
            <div style={{width: '100%', position: 'relative'}}>
                <EqualizerBackgroundBlur>
                    <EqualizerBackground/>
                </EqualizerBackgroundBlur>
                <Equalizer/>
            </div>
        </Wrapper>
    );
}

const EqualizerBackgroundBlur = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  bottom: 0.5rem;
  filter: blur(9px);
`;

const EqualizerBackground = styled.div`
  height: 75px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%, 50% 0);
  border: 27px solid transparent;
  background: linear-gradient(90deg, #6BD997, #01B3FF, #4301FF, #D96BCE) no-repeat;
  -webkit-filter: blur(10px);
  border-radius: 100%;
`;


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Equalizer = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  background: url("${equalizerPlaceholder}") no-repeat center;
`;
