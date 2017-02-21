import React from 'react';
import './Donut.css';
import { Donut } from '../../../Morris/morris.min';

class DonutChart extends React.Component { //eslint-disable-line
  componentDidMount() {
    Donut({ //eslint-disable-line
      element: 'chart',
      data: [
          { label: 'Target', value: 100 },
          { label: 'Completed', value: 800 },
      ],
      size: true,
      colors: [
        '#1d233b', '#FFCA28',
      ],
    });
  }
  render() {
    return (
      <div id="chart"></div>
    );
  }
}

export default DonutChart;
