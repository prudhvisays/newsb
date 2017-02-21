import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './AreaStyle.css';

class CustomTooltip extends React.Component{
  render() {
    const { active } = this.props;
    if (active) {
      const { payload, label } = this.props;
      const payload1 = `${payload[0].name}`;
      const payload2 = `${payload[1].name}`;
      return (
        <div className="custom-tooltip">
          <p className="desc">{label}</p>
          <p className="label">{`${payload1} : ${payload[0].payload[`${payload1}`]}`}</p>
          <p className="label">{`${payload2} : ${payload[1].payload[`${payload2}`]}`}</p>
        </div>
      );
    }
    return null;
  }
}
export default class StackedAreaChart extends React.Component{
	render() {
    const { data, color} = this.props;
  	return (
      <ComposedChart width={399} height={200} data={data}
            margin={{top: 0, right: 0, bottom: 0, left: 0}}>
          <XAxis dataKey="name" label="Pages"/>
          <YAxis label="Index"/>
          <Tooltip content={<CustomTooltip/>}/>
          <Legend/>
          <CartesianGrid stroke='#f5f5f5'/>
          <Bar dataKey='actual' barSize={20} fill={color}/>
          <Line type='monotone' dataKey='target' stroke='#ff7300'/>
       </ComposedChart>
    );
  }
}
