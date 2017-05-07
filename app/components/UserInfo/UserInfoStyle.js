import styled from 'styled-components';

const UserInfoStyle = styled.div`
  .fa {
    color: #e0d94d;
    margin-right: 0.5rem;
  }
  .closeButton {
    position: absolute;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    .fa {
      margin-right: 0;    
    }
  }
  .ProfileInfo {
    .profile-block {
      background: #fff;
      border-radius: 4px;
      box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
    }
    .profile-pic {
     width: 150px;
     height: 150px;
     overflow: hidden;
     margin: 0;
     border: 4px double #e0d94d;
     img {
      width: 100%;
      height: 100%;
     }
    }
     .profile-details {
        color: #6bc9c5;
        padding: 0.4em;
          .Profile-title {
          font-size: 0.6rem;
        }
        .profile-phone {
          .fa.fa-phone {
            font-size: 1rem;
            color: #e0d94d;
          }
          .sub-text{
            font-size: 0.8rem;
            font-weight: 500;
          }
        }
     }
  }
`;

export default UserInfoStyle;
