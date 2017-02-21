import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, female: 2400, male: 2400},
      {name: 'Page B', uv: 3000, female: 1398, male: 2210},
      {name: 'Page C', uv: null, female: 9800, male: 2290},
      {name: 'Page D', uv: 2780, female: 3908, male: 2000},
      {name: 'Page E', uv: 1890, female: 4800, male: 2181},
      {name: 'Page F', uv: 2390, female: 3800, male: 2500},
      {name: 'Page G', uv: 3490, female: 4300, male: 2100},
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};


export default class CustomBarChart extends React.Component {
	render() {
  	return (
    	<BarChart  width={400} height={200} data={data}
            margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                  <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
       <XAxis dataKey="name"/>
       <YAxis/>
             <linearGradient id="Gradient-1"
                  x1="0" y1="0" x2="100%" y2="0">
                 <stop offset="0%" stop-color="lightblue" />
                 <stop offset="100%" stop-color="#ef5b2b" />
             </linearGradient>
         <Bar dataKey="uv" fill="url(#colorUv)" shape={<TriangleBar/>} label/>
      </BarChart>
    );
  }
}
