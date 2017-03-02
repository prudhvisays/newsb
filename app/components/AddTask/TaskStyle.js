import styled from 'styled-components';

const TaskStyle = styled.ul`
&.task-tab {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
}
/* Float the list items side by side */
&.task-tab li {
  margin: 0;
}

/* Style the links inside the list items */
&.task-tab li a {
    display: inline-block;
    color: #333;
    text-align: center;
    padding: 1em 1em;
    text-decoration: none;
    transition: 0.3s;
    font-size: 0.7rem;
    font-weight: 500;
    width: 100%;
}

/* Change background color of links on hover */
&.task-tab li a:hover {border-bottom: 2px solid #6bc9c5;}

/* Create an active/current tablink class */
&.task-tab li a:focus, .active {border-bottom: 2px solid #6bc9c5;}
`;

export default TaskStyle;
