import styled from 'styled-components';
import { Map } from 'react-leaflet';
const MapStyle = styled(Map)`
  .my-order-icon {
  height: 14px !important;
  width: 14px !important;
  background:#ded64d;
  border:2px solid rgba(255,255,255,0.5);
  color:blue;
  font-weight:bold;
  text-align:center;
  border-radius:50%;
  line-height:30px;
  }
  .my-offline-icon {
   height: 14px !important;
  width: 14px !important;
  background:#c91111;
  border:2px solid rgba(255,255,255,0.5);
  color:blue;
  font-weight:bold;
  text-align:center;
  border-radius:50%;
  line-height:50px;
  }
  .my-available-icon {
   height: 14px !important;
  width: 14px !important;
  background:#4a9b17;
  border:2px solid rgba(255,255,255,0.5);
  color:blue;
  font-weight:bold;
  text-align:center;
  border-radius:50%;
  line-height:30px;
  }
`;

export default MapStyle;
