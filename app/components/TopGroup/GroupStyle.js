import styled from 'styled-components';

const GroupStyle = styled.a`
text-decoration: none;
outline: none;
&:hover{
  text-decoration: none;
}
&::before{
 background: ${(props) => props.badgeColor}
}
`;

export default GroupStyle;
