import React from 'react';
import PilotFeed from '../PilotFeed';
import PilotCard from '../PilotCard';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import classNames from 'classnames';

function boxMullerRandom() {
    let phase = false,
        x1, x2, w, z;

    return (function() {

        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}


export default class Pilots extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.state = {
      expand: false,
      data: [],
      intervalId: '',
    };
    this.taskExpand = this.taskExpand.bind(this);
    this.detailedInfo = this.detailedInfo.bind(this);
    this.timer = this.timer.bind(this);
  }
  componentDidMount() {
    let Datepicker = new Ink.UI.DatePicker( '.ink-datepicker' ); //eslint-disable-line
    const intervalId = setInterval(() => this.timer, 3000);
    this.setState({ intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    this.setState({
      data: this.state.data.concat([boxMullerRandom()]),
    });
  }
  taskExpand() {
    const taskDiv = document.querySelector('.TaskExpand');
    const listShow = document.querySelector('.ListShow');
    if (!this.state.expand) {
      this.props.groupDisplay();
      taskDiv.style.height = '98vh';
      listShow.style.opacity = '1';
      listShow.style.display = 'block';
      this.setState({ expand: true });
    } else {
      this.props.groupDisplay();
      taskDiv.style.height = '30vh';
      listShow.style.opacity = '0';
      listShow.style.display = 'none';
      this.setState({ expand: false });
    }
  }
  detailedInfo() {
    this.props.divPilot();
  }
  render() {
    const { data } = this.state;
    const { stats } = this.props;
    return (
      <div className="all-40 marginTop" style={{ height: '30vh' }}>
        <div className={classNames('boxShadow', 'TaskExpand', 'block-background', 'PilotLiner', { pilotProgress: stats.request })} style={{ height: '30vh', position: 'relative', transition: 'height 0.5s linear 0s', overflow: 'hidden' }}>
          <div className={classNames('orders-block', 'ink-flex', { pilotIndeterminate: stats.request })}>
            <div className="all-100" style={{ padding: '0.5em 0.8em' }}>
              <div className="ink-flex">
                <div className="all-100">
                  <div className="team-search" style={{ width: '100%' }}>
                    <input type="text" placeholder="Search Pilots" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: '0.6em 0.8em' }}>
            <div className="ink-flex">
              <div className="all-100">
                <Sparklines data={data} limit={20} width={100} height={10} margin={0}>
                  <SparklinesLine style={{ stroke: '#51d4ff', strokeWidth: '0.5', fill: 'none' }} />
                  <SparklinesSpots size={1} />
                </Sparklines>
              </div>
              <div className="all-100">
                <PilotFeed tasksExpand={this.taskExpand} stats={stats} />
              </div>
            </div>
            {/* <div className="search" style={{ marginTop: '14px', width: '20.90em' }}>
              <div className="wrapper">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search" style={{ width: '100%', outline: 'none' }} />
              </div>
            </div> */}
            <div className="ListShow" style={{ marginTop: '2.5em', display: 'none', opacity: '0', transition: 'all 0.5s linear 0s' }}>
              <div className="list-scroll">
                <PilotCard detailedInfo={this.detailedInfo} pilotName={'Mark Heisenberg'} pilotStatus={'Online'} totalTask={'5'} completedTask={'2'} pilotDistance={'20'}/>
                <PilotCard pilotName={'Kalayug'} pilotStatus={'Online'} totalTask={'5'} completedTask={'2'} pilotDistance={'20'}/>
                <PilotCard pilotName={'Gustavo'} pilotStatus={'Offline'} totalTask={'5'} completedTask={'2'} pilotDistance={'20'}/>
                <PilotCard pilotName={'Nortan'} pilotStatus={'Connection Lost'} totalTask={'5'} completedTask={'2'} pilotDistance={'20'}/>
                <PilotCard pilotName={'Ferry'} pilotStatus={'Poor Connection'} totalTask={'5'} completedTask={'2'} pilotDistance={'20'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
