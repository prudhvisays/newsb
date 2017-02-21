import React from 'react';
import Score from '../Score';

export default class PilotFeed extends React.Component { //eslint-disable-line
  render() {
    const { tasksExpand, stats } = this.props;
    const { pilotStats } = stats;
    return (
      <div className="ink-flex pilot-feed-boxShadow" style={{ fontSize: '1rem', position: 'relative' }}>
        <div className="all-33">
          <Score score={pilotStats.available} subTitle={'Active'} />
        </div>
        <div className="all-33">
          <Score score={pilotStats.offline} subTitle={'Offline'} />
        </div>
        <div className="all-33">
          <Score score={pilotStats.total} subTitle={'Total'} />
        </div>
      </div>
    );
  }
}
