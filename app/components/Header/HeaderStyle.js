import styled from 'styled-components';

const HeaderStyle = styled.div`
  height: 100%;
  position: fixed;
  width: 50px;
  background-color: #394264;
  -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);
  -moz-box-shadow: 0 1px 4px rgba(0,0,0,.04);
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  div{
    margin-top: 6em;
  }
  a {
    padding: 10px;
    display: block;
    transition: all 0.3s ease;
    color: #FAFAFA;
    font-size: 1.5rem;
    position: relative;
  }
  a:hover::before{
    content : "";
    position: absolute;
    top: 12px;
    left: 0;
    height: 34px;
    width: 10%;  /* or 100px */
    border-left: 0.2em solid #18FFFF;
  }
  a:hover {
    color: rgb(81, 212, 255);
  }

`;

export default HeaderStyle;
