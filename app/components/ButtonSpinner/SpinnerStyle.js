import styled, {keyframes} from 'styled-components';

const bubble = keyframes`
0% {
    transform: scale(0, 0);
  }
  12% {
    transform: scale(1.5, 1.5);
  }
  23% {
    transform: scale(0.5, 0.5);
  }
  34% {
    transform: scale(1.2, 1.2);
  }
  45% {
    transform: scale(1, 1);
  }
  85% {
    transform: scale(0, 0);
  }
`;

const SpinnerStyle = styled.div`
  display: inline-block;
 .bubble {
  animation: ${bubble} 1100ms forwards infinite;
  background: #f5f5f5;
  border-radius: 50%;
  box-shadow: 0 0 8px #f5f5f5;
  display: inline-block;
  height: 6px;
  margin: 3.5px;
  transform: scale(0, 0);
  width: 6px;
}
.bubble--2, .bubble--4 {
  animation-delay: 125ms;
}
.bubble--1, .bubble--5 {
  animation-delay: 250ms;
}
 
`;

export default SpinnerStyle;
