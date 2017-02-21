import React from 'react';
import './timeline.css';

export default class Timeline extends React.Component { //eslint-disable-line
  render() {
    return (
      <section className="timeline">
        <ul>
          <li>
            <div>
              <time>12:30 PM</time>
              Started
            </div>
          </li>
          <li>
            <div>
              <time>12:30 PM</time>
              Started
            </div>
          </li>
          <li>
            <div>
              <time>12:30 PM</time>
              Started
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
