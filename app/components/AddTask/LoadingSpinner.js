import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    transform: translateX(0px);
  }
  66% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(300px);
  }
`;
const LoadingSpinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  overflow: hidden;
.cs-loader-inner {
  transform: translateY(-50%);
  top: 62%;
  position: absolute;
  width: calc(100% - 200px);
  color: #FFF;
  padding: 0 100px;
  text-align: center;
  .cs-note {
    position: relative;
    font-size: 1rem;
    left: -4px;
  }
  .cs-loader-inner label:nth-child(6) {
  -webkit-animation: ${loading} 2s infinite ease-in-out;
  animation: ${loading} 2s infinite ease-in-out;
}

label:nth-child(5) {
  -webkit-animation: ${loading} 2s 100ms infinite ease-in-out;
  animation: ${loading} 2s 100ms infinite ease-in-out;
}

label:nth-child(4) {
  -webkit-animation: ${loading} 2s 200ms infinite ease-in-out;
  animation: ${loading} 2s 200ms infinite ease-in-out;
}

label:nth-child(3) {
  -webkit-animation: ${loading} 2s 300ms infinite ease-in-out;
  animation: ${loading} 2s 300ms infinite ease-in-out;
}

label:nth-child(2) {
  -webkit-animation: ${loading} 2s 400ms infinite ease-in-out;
  animation: ${loading} 2s 400ms infinite ease-in-out;
}

label:nth-child(1) {
  -webkit-animation: ${loading} 2s 500ms infinite ease-in-out;
  animation: ${loading} 2s 500ms infinite ease-in-out;
}
}

.cs-loader-inner label {
  font-size: 20px;
  opacity: 0;
  display:inline-block;
}
`;

export default LoadingSpinner;
