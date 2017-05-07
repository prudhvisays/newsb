import styled from 'styled-components';

const ToggleStyle = styled.div`
    padding: 1.5rem;
    .active, .get-details {
      line-height: 0.8rem;
      padding: 1em;
      border-radius: 2px;
      text-align: center;
      color: #fff;
      margin-bottom: 1em;
      cursor: pointer;
      transition: all .3s ease;
    }
    .active {
      background: rgb(107, 201, 197);
      &:hover {
        background: rgba(107, 201, 197, 0.85);
      }
    }
    .get-details {
      background: rgb(51, 51, 51);
      &:hover {
        background: rgba(51, 51, 51, 0.85);
      }
    }
    .close, .download {
      line-height: 0.3rem;
      font-size: 0.8rem;
      padding: 1em;
      display: inline-block;
      border-radius: 2px;
      text-align: center;
      color: #fff;
      margin-bottom: 1em;
      cursor: pointer;
      transition: all .3s ease;
    }
    .download {
      background: rgb(107, 201, 197);
      &:hover {
        background: rgba(107, 201, 197, 0.85);
      }
    }
    .close {
      background: rgb(51, 51, 51);
      &:hover {
        background: rgba(51, 51, 51, 0.85);
      }
    }
`;

export default ToggleStyle;
