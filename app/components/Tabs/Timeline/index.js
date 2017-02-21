import React from 'react';
import './timeline.css';

export default class Timeline extends React.Component { //eslint-disable-line
  render() {
    return (
      <section className="timeline" style={{ fontSize: '0.8em' }}>
        <div className="timeline-list" style={{ padding: '0 1.5em' }}>
          <div className="ink-flex">
            <div className="timeline-date">
              <div className="ink-flex vertical">
                  <div>12:30</div>
                  <div>12/06/2016</div>
              </div>
            </div>
            <div className="timeline-bar">
              <div className="pipe bar"></div>
            </div>
            <div className="timeline-info">
              <div className="dot"></div>
              <div className="ink-flex">
                <div>Started</div>
              </div>
            </div>
          </div>
          <div className="ink-flex">
            <div className="timeline-date">
              <div className="ink-flex vertical">
                  <div>12:30</div>
                  <div>12/06/2016</div>
              </div>
            </div>
            <div className="timeline-bar">
              <div className="pipe bar"></div>
            </div>
            <div className="timeline-info">
              <div className="dot"></div>
              <div className="ink-flex vertical">
                <div>Picked Up</div>
                <div className="timeline-sub">Travelled so far 2km</div>
                <div className="timeline-box">Madhapur malakpet narcos street kondapur 50004</div>
              </div>
            </div>
          </div>
          <div className="ink-flex">
            <div className="timeline-date">
              <div className="ink-flex vertical">
                  <div>12:30</div>
                  <div>12/06/2016</div>
              </div>
            </div>
            <div className="timeline-bar">
              <div className="pipe"></div>
            </div>
            <div className="timeline-info">
              <div className="dot"></div>
              <div className="ink-flex vertical">
                <div>Delivered</div>
                <div className="timeline-sub">Travelled so far 2km</div>
                <div className="timeline-box">Madhapur malakpet narcos street kondapur 50004</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
