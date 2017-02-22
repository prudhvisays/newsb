import styled from 'styled-components';

const MainSection = styled.section`
    position: relative;
    margin: 8em 12em;
  .card-login {
    height: 350px;
    background: #fff;
    box-shadow: 1px 1px 20px 2px rgba(46,61,73,0.15);
    border-radius: 4px;
    padding: 1em 1em;
    .card-input {
      margin-bottom: 1em;
      width: 50%;
      input {
        width: 100%;
      }
    }
  }
  .card-logo {
    position: relative;
    height: 378px;
    width: 40%;
    top: -49px;
    right: 30px;
    background: #fff;
    box-shadow: 1px 1px 20px 2px rgba(46,61,73,0.15);
    border-radius: 4px;
  }
`;

export default MainSection;
