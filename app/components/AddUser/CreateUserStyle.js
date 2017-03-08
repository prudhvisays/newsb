import styled from 'styled-components';

const CreateUserStyle = styled.div`
margin: 3em 3em 0 3em;
background: #fff;
color: #394264;
border-radius: 2px;
padding: 1em 1em;
font-size: 15px;
.BottomMargin {
   margin-bottom: 0.6em;
   width: 100%;
   .area{
     width: 100%;
   }
   input {
   padding-right: 0.6em;
   outline: none;
   width: 100%;
  }
 }
 .sub-title{
  font-size: 0.65rem;
  color: #6bc9c5;
}
button {
line-height: 0.3em;
 background: #6bc9c5;
 color: #fff;
 padding: 1em 1em;
 border: 0;
 box-shadow: 8px 10px 20px 0 rgba(46,61,73,0.15);
 border-radius: 2px;
 outline: none;
 &:hover{
     background-color: rgba(107, 201, 197, 0.84);
     box-shadow: 2px 4px 8px 0 rgba(46,61,73,0.2);
   }
`;

export default CreateUserStyle;
