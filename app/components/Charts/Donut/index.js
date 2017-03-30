import React from 'react';
import './Donut.css';
let donut;
let Data =  [
    { label: 'Target', value: 100 },
    { label: 'Total', value: 21 },
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
    const { total } = nextProps.stateOrderStats;
    console.log(total);
    if (nextProps.stateOrderStats.total !== this.props.total) {
      this.targets(total);
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
