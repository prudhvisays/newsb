import React from 'react';
import './Donut.css';
let donut;
let Data =  [
    { label: 'Target', value: 100 },
    { label: 'Total', value: 0 },
];
class DonutChart extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.targets = this.targets.bind(this);
  }
  componentDidMount() {
    const { total } = this.props.stateOrderStats;
    donut = Morris.Donut({ //eslint-disable-line
      element: 'chart',
      data: Data,
      labelColor: '#333',
      size: true,
      colors: [
        '#6bc9c5', '#FFCA28',
      ],
    });
  }

  componentWillReceiveProps(nextProps) {
    const { completed } = nextProps.stateOrderStats;
    if (nextProps.stateOrderStats.completed !== this.props.stateOrderStats.completed) {
      this.targets(completed);
    }
  }
  targets(total) {
    Data = [
        { label: 'Target', value: 100 },
        { label: 'Total', value: total },
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
