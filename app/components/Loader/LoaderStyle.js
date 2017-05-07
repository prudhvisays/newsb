import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
   0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: 15px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
`
const LoaderStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .text {
  color: ${(props) => props.color};
  display: inline-block;
  margin-left: 5px;
}
.bounceball {
  position: relative;
  display: inline-block;
  height: 37px;
  width: 15px;
}
.bounceball:before {
  position: absolute;
  content: '';
  display: block;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  transform-origin: 50%;
  animation: ${bounce} 500ms alternate infinite ease;
}
`;

export default LoaderStyle;
