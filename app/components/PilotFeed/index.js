import React from 'react';
import Score from '../Score';

export default class PilotFeed extends React.Component { //eslint-disable-line
  render() {
    const { tasksExpand, stats } = this.props;
    const { pilotStats } = stats;
    return (
      <div className="ink-flex pilot-feed-boxShadow" style={{ fontSize: '1rem', position: 'relative' }}>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={pilotStats.available || 0} subTitle={'Active'} />
        </div>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={pilotStats.offline || 0} subTitle={'Offline'} />
        </div>
        <div className="all-33" onClick={tasksExpand}>
          <Score score={pilotStats.total || 0} subTitle={'Total'} />
        </div>
      </div>
    );
  }
}
