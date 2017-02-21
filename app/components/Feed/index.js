import React from 'react';
import Score from '../Score';

export default class Feed extends React.Component { //eslint-disable-line
constructor(props) {
  super(props);
}
  render() {
    const { tasksExpand, stats } = this.props;
    const { orderStats } = stats;
    return (
      <div className="ink-flex task-feed-boxShadow" style={{ fontSize: '1rem', height: '66px' }}>
      <div className="all-33" onClick={tasksExpand} >
        <Score score={orderStats.assigned} subTitle={'Assigned'} />
      </div>
      <div className="all-33" onClick={tasksExpand}>
        <Score score={orderStats.unAssigned} subTitle={'Unassigned'} />
      </div>
      <div className="all-33" onClick={tasksExpand}>
        <Score score={orderStats.completed} subTitle={'Completed'} />
      </div>
    </div>
    );
  }
}
