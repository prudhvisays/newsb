import styled from 'styled-components';

const TabStyle = styled.ul`
&.tab {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(236, 24, 79);
}
/* Float the list items side by side */
&.tab li {
  float: left;
  margin: 0;
}

/* Style the links inside the list items */
&.tab li a {
    display: inline-block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: 0.3s;
    font-size: 0.7rem;
    font-weight: 500;
}

/* Change background color of links on hover */
&.tab li a:hover {background-color: rgba(243, 49, 99, 0.86);}

/* Create an active/current tablink class */
&.tab li a:focus, .active {background-color: rgba(243, 49, 99, 0.86);}
`;

export default TabStyle;
