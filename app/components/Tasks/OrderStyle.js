import styled from 'styled-components';

const OrderStyle = styled.div`
height: ${props => props.manager ? '30vh' : '98vh'};
position: relative;
overflow: hidden;
transition: height 0.5s linear 0s;
`;

export default OrderStyle;
