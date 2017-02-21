import React from 'react';
import './Donut.css';

class DonutChart extends React.Component { //eslint-disable-line
  componentDidMount() {
    Morris.Donut({ //eslint-disable-line
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
