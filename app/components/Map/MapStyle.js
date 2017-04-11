import styled from 'styled-components';
import { Map } from 'react-leaflet';
const MapStyle = styled(Map)`
  .my-order-icon {
  background:#ded64d;
  border:4px solid rgba(255,255,255,0.5);
  color:blue;
  font-weight:bold;
  text-align:center;
  border-radius:50%;
  line-height:30px;
  }
  .my-offline-icon {
  background:#c91111;
  border:4px solid rgba(255,255,255,0.5);
  color:blue;
  font-weight:bold;
  text-align:center;
  border-radius:50%;
  line-height:50px;
  }
  .my-available-icon {
  background:#4a9b17;
  border:4px solid rgba(255,255,255,0.5);
  color:blue;
  font-weight:bold;
  text-align:center;
  border-radius:50%;
  line-height:30px;
  }
`;

export default MapStyle;
