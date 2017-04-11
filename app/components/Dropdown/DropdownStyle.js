import styled from 'styled-components';

const DropDownStyle = styled.div`
    position: relative;
    font-size: 0rem;
    & > .fa {
     position: absolute;
    right: 8px;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
    }
    .fa {
    font-size: 1rem;
        &:hover {
            color: #6bc9c5;
        }
        &.active {
            color: #6bc9c5;
        }
    }
    ul {
        display: none;
        padding: 0.5em 0.5em;
        z-index: 999;
         font-size: 1rem;
             &.active {
            display: block;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 120px;
            overflow: auto;
            boxShadow: 6px 6px 12px 0 rgba(46,61,73,0.15);
            right: 0;
        }
    li {
        color: black;
        text-decoration: none;
        display: block;
        &:hover {
            background-color: #f1f1f1;
            color: #6bc9c5;
        }
        }
    }
    
`;

export default DropDownStyle;
