import styled from 'styled-components';

const WebhookStyle = styled.div`
  background: #fafafa;
  height: 100%;
  .webhook-padding {
    padding-top: 5em !important;
  }
  .webhook-col-back {
    background: #fff;
  }
  .webhook-col-height {

  }
  .webhook-card {
    height: 8vh;
    margin-bottom: 0.8em;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
  }
  .webhook-map {
    margin-bottom: 0.8em;
    display: flex;
    flex-grow: 1;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    overflow: hidden;
  }
  .webhook-subtitle{
    font-size: 0.6rem;
    font-weight: 700;
  }
  .webhook-title {
    font-size: 0.85rem;
  }
  .webhook-card-padding{
    padding: 0.5em 2em 0 2em;
  }
  @media (max-width: 640px) {
    .webhook-padding {
      padding-top: 1em !important;
    }
    .webhook-map {
      height: 20vh;
    }
  }
`;

export default WebhookStyle;
