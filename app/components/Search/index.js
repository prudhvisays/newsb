import React from 'react';

export default class Search extends React.Component { //eslint-disable-line
  render() {
    const { placeHolder, searchText } = this.props
    return (
      <input type="text" placeholder={placeHolder} onChange={searchText} />
    );
  }
}
