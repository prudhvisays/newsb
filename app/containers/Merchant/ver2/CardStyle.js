import styled from 'styled-components';

const MainSection = styled.section`
    position: relative;
    margin: 7em auto;
    .mer-card {
     background: #fff;
     height: 270px;
     box-shadow: 8px 10px 20px 0 rgba(46,61,73,0.15);
      .mer-card-logo {
        background: #6bc9c5;
        height: 270px;
        padding: 2em 2em;
        .mer-logo-wrap {
          height: 200px;
          width: 200px;
          img {
            height: 200px;
            width: 100%;
          }
        }
      }
      .mer-card-form {
        background: #fff;
        height: 270px;
      }
   @media (max-width: 750px) {
      margin: 0em 0em;
       .mer-card-logo {
        background: #6bc9c5;
        height: 220px;
         padding: 1em 3.5em;
        .mer-card-wrap {
          height: 100px;
          width: 100px;
        }
        img {
          height: 100px;
        }
      }
      .mer-card-form {
        background: #fff;
        height: 200px;
      }
    }
     } 
`;

export default MainSection;
