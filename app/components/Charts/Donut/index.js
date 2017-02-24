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
