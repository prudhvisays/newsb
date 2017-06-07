import styled from 'styled-components';

const AppHeaderStyle = styled.div`
   height: 100%;
  position: fixed;
  width: 50px;
  background-color: #333;
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  .logo-container {
  padding: 0.1em 0.1em;
  margin: 0.1em 0 0 0.1em;
    img{
      height: 42px;
      width: 42px;
    }
  }
  .links{
    margin-top: 3em;
  }
  a {
    padding: 10px;
    display: block;
    transition: all 0.3s ease;
    color: #FAFAFA;
    font-size: 1.5rem;
    position: relative;
    &.select {
      color: #6bc9c5;
      &::before {
        content : "";
        position: absolute;
        top: 12px;
        left: 0;
        height: 34px;
        width: 10%;  /* or 100px */
        border-left: 0.2em solid #6bc9c5;  
      }
    }
    &.task-select, &.task-hover:hover{
      transform: translateY(-3px);
      color: #ded64d;
    }
  }
  a.path-hover:hover::before{
    content : "";
    position: absolute;
    top: 12px;
    left: 0;
    height: 34px;
    width: 10%;  /* or 100px */
    border-left: 0.2em solid #6bc9c5;
  }
  a.path-hover:hover {
    color: #6bc9c5;
  }
`;

export default AppHeaderStyle;
