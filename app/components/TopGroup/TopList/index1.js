import React from 'react';
import GroupStyle from '../GroupStyle';
import AccordStyle from './AccordStyle';

export default class TopList extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.accordion = this.accordion.bind(this);
  }
  componentDidMount() {
    this.accordion()
  }
  accordion(comp) {
    console.log(this.comp);
  }
  render() {
    const { badgeColor, groupName, groupSales } = this.props;
    return (
      // <li className="player-list ink-flex">
      //   <GroupStyle className="ink-flex player-line" badgeColor={badgeColor}>
      //     <div className="all-50 group-name" style={{ paddingLeft: '0.8em' }}>{groupName}</div>
      //     <div className="all-50" style={{ textAlign: 'right' }}><em className="sub-title">Sales </em>{groupSales}</div>
      //   </GroupStyle>
      // </li>
      // <li className="player-list ink-flex">
      //   <GroupStyle className="ink-flex player-line" badgeColor={badgeColor} onClick={this.accordion} ref={(comp) => { this.component = comp; }}>
      //     <div className="all-50 group-name" style={{ paddingLeft: '0.8em' }}>{groupName}</div>
      //     <div className="all-50" style={{ textAlign: 'right' }}><em className="sub-title">Sales </em>{groupSales}</div>
      //   </GroupStyle>
      //   <div className="panel">hello</div>
      // </li>
  //     <AccordStyle>
  //   <a className="accordion">{groupName}</a>
  //   <div className="panel">
  //     <p>hello</p>
  //   </div>
  // </AccordStyle>
    )
  }
}
