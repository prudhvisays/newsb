import styled from 'styled-components';
import pilot from '../../Assets/pilot.jpg'

const PrivacyStyle = styled.div`
 font-size: 1em;
 background-image: url(${pilot});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
 .header {
 padding: 0 0 0 2em;
  img {
  width: 150px;
  }
 }
 .card {
  padding: 1em 0 2em 0;
  overflow-y: scroll;
  height: 86.2vh;
  &::-webkit-scrollbar {
    width: 5px;
}

&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(144, 153, 183, 0.50);
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(144, 153, 183, 1);
}
 }
  .content {
  position: relative;
  padding: 1em 1em;
  box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
  background: #fff;
  border-radius: 2px;
  .main-title {
   text-align: center;
   color: #6bc9c5;
   margin-bottom: 1em;
  }
  .title {
  color: #6bc9c5;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0.5em;
  }
  .sub-title {
    font-size: 1em;
    font-weight: 600;
  }
  .description {
      margin-bottom: 0.8em;
      line-height: 2em;
      a {
        color: #6bc9c5; 
      }
  }
  }
`;

export default PrivacyStyle;
