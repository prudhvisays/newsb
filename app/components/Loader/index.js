import React from 'react';
import LoaderStyle from './LoaderStyle';

class Loader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { color, statusText} = this.props;
    return (
      <LoaderStyle color={color}>
        <div className="loading">
          <div className="bounceball"></div>
          <div className="text">{statusText}</div>
        </div>
      </LoaderStyle>
    );
  }
}


export default Loader;
