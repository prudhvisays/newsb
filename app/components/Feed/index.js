import React from 'react';
import Score from '../Score';

export default class Feed extends React.Component { //eslint-disable-line
constructor(props) {
  super(props);
}
  render() {
    const { tasksExpand, orderStats } = this.props;
    return (
      <div className="ink-flex task-feed-boxShadow" style={{ fontSize: '1rem', height: '66px' }}>
      <div className="all-33" onClick={tasksExpand} >
        <Score score={orderStats.assigned || 0} subTitle={'Assigned'} />
      </div>
      <div className="all-33" onClick={tasksExpand}>
        <Score score={orderStats.unassigned || 0} subTitle={'Unassigned'} />
      </div>
      <div className="all-33" onClick={tasksExpand}>
        <Score score={orderStats.completed || 0} subTitle={'Completed'} />
      </div>
    </div>
    );
  }
}
