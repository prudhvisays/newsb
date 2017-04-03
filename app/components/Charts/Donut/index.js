import React from 'react';
import './Donut.css';
let donut;
class DonutChart extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Target', value: 100 },
        { label: 'Total', value: 0 },
      ]
    }
    this.targets = this.targets.bind(this);
    this.setValue = this.setValue.bind(this);
  }
  componentDidMount() {
    const { total } = this.props.stateOrderStats;
    donut = Morris.Donut({ //eslint-disable-line
      element: 'chart',
      data: this.state.data,
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
    this.setState({ data: [
      { label: 'Target', value: 100 },
      { label: 'Total', value: total },
    ]
    },this.setValue)
  }
  setValue() {
    donut.setData(this.state.data);
  }
  render() {
    return (
      <div id="chart"></div>
    );
  }
}

export default DonutChart;
