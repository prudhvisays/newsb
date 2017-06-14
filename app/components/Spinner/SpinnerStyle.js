import styled, { keyframes } from 'styled-components';

const bubble = keyframes`
   25%{
    z-index: 2;
  }
  50%{
    transform:translate(50px,0) scale(1);
  }
  75%{
    transform:translate(0,0) scale(0.75);
  }
  100%{
    transform:translate(-50px,0) scale(1);

  }
`
const bubble2 = keyframes`
25%{
    transform:translate(0,0) scale(0.75);
  }
  50%{
    transform:translate(-50px,0) scale(1);
  }
  75%{
    z-index: 2;
  }
  100%{
    transform:translate(50px,0) scale(1);
  }
`
const SpinnerStyle = styled.div`
  width: 30px;
  height: 30px;
 i{
  width: 30px;
  height: 30px;
  display: inline-block;
  background: #6bc9c5;
  border-radius: 50%;
  position: absolute;
}
i:nth-child(1){
  transform:translate(-50px,0);
  animation:${bubble} 1s linear infinite;

}
i:nth-child(2){
  background: #e0d94d;
  transform:translate(50px,0);
  animation:${bubble2} 1s linear infinite;
}
  `;

export default SpinnerStyle;
