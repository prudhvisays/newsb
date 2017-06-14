import React from 'react';
import SpinnerStyle from './SpinnerStyle';

class Spinner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { color, statusText} = this.props;
    return (
      <SpinnerStyle color={color}><i></i><i></i></SpinnerStyle>
    );
  }
}


export default Spinner;
