import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 4px 7px;
  width: 100px;
  font-size: 0.8em;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.cancel ? '#333' : '#fff')};
  background-color: ${(props) => (props.cancel ? 'transparent' : 'rgb(81, 212, 255)')};
  border: 1px solid ${(props) => (props.cancel ? '#f0ad4e' : 'none')};
  border-radius: 0;
  margin-right: 5px;
  &:hover {
  background-color: ${(props) => (props.cancel ? '#f0ad4e' : 'transparent')};
  border: 1px solid ${(props) => (props.cancel ? 'none' : 'rgb(81, 212, 255)')};
  color: ${(props) => (props.cancel ? '#fff' : '#333')};
}
  &:active {
    background-color: ${(props) => (props.cancel ? 'rgb(245, 37, 151)' : 'transparent')};
    border: 1px solid ${(props) => (props.cancel ? 'none' : 'rgb(81, 212, 255)')};
    transform: translateY(4px);
  }
`;

export default ButtonStyle;
