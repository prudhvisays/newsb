import React from 'react';
import './Donut.css';
let donut;
class DonutChart extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.targets = this.targets.bind(this);
  }
  componentDidMount() {
    donut = Morris.Donut({ //eslint-disable-line
      element: 'chart',
      data: [
          { label: 'Target', value: 0 },
          { label: 'Completed', value: 0 },
      ],
      labelColor: '#fafafa',
      size: true,
      colors: [
        '#1d233b', '#FFCA28',
      ],
    });
  }

  componentDidUpdate(prevProps) {
    const { total } = this.props.stateOrderStats;
    console.log(total);
    if (prevProps.stateOrderStats.total !== total) {
      this.targets(total);
    }
  }
  targets(total) {
    const Data = [
        { label: 'Target', value: 100 },
        { label: 'Completed', value: total },
    ];
    donut.setData(Data);
  }
  render() {
    return (
      <div id="chart"></div>
    );
  }
}

export default DonutChart;
