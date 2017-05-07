import styled from 'styled-components';

const ReOrderStyle = styled.div`
    .main-card-height {
    height: 55vh;
    padding: 0.4em;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 3px;
}

&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(144, 153, 183, 0.35);
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
}
   }
   .card-bottom {
    margin-bottom: 0.5em;
   }
   .select-card, .reorder-card {
    background: #fff;
    padding: 0.5em 0.5em;
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(35,47,53,.09);
   }
   .card-title {
    font-size: 1em;
    font-weight: bold;
    color: #6bc9c5;
   }
   .fixedButtons {
    position:absolute;
    left:0px;
    bottom:0px;
    width:100%;
    color: #fff;
    .cancel{
        background: #c1b944;
        }
    button {
        background: #6bc9c5;
        margin: 1em 1em;
        border-radius: 2px;
        }
    }
   .rc-select-dropdown-menu.rc-select-dropdown-menu-vertical.rc-select-dropdown-menu-root{
    height: 180px;
    }
`;

export default ReOrderStyle;
