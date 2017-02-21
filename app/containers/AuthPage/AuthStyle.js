import styled from 'styled-components';

const AuthStyle = styled.section`
position: relative;
margin: 10em auto;
background: #fff;
height: 48vh;
padding: 2em 0;
box-shadow: 8px 10px 20px 0 rgba(46,61,73,0.15);
width: 300px;
border-radius: 3px;
div {
  margin-bottom: 0.8em;
}
.form-style {
  position: relative;
  top: -40px;
}
 button{
   background: #6bc9c5;
   color: #fff;
   width: 100%;
   margin-top: 23px;
   box-shadow: 8px 10px 20px 0 rgba(46,61,73,0.15);
   border-radius: 3px;
   outline: none;
   transition: all 0.1s linear;
   &:hover{
     background-color: rgba(107, 201, 197, 0.84);
     box-shadow: 2px 4px 8px 0 rgba(46,61,73,0.2);
   }
 }
 .input-div {
   width: 100%;
 }
 input {
   outline: none;
   width: 100%;
   padding-left: 1em;
   &:focus {
    outline: none !important;
    border: 1px solid rgba(107, 201, 197, 0.84);
    border-radius: 3px;
    box-shadow: 2px 4px 8px 0 rgba(107, 201, 197, 0.84);
}
 }
`;

export default AuthStyle;
