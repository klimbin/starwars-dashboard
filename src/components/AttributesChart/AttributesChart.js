import React from 'react';
import './AttributesChart.css';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { formatNumberString } from "../../utils/formatNumberString";

function AttributesChart({chartData, attribute}) {
  return (
    <div className="AttributesChart">
      <BarChart
        width={800}
        height={250}
        data={chartData}
        margin={{right: 75}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis
          type="number"
          width={145}
          dataKey={attribute}
          tickFormatter={formatNumberString}
          interval="preserveStart"
          allowDataOverflow
        />
        <XAxis
          type="category"
          height={60}
          dataKey="name"
          interval={0}
          angle={30}
          dy={15}
        />
        <Tooltip formatter={formatNumberString}/>
        <Bar
          dataKey={attribute}
          fill="#42a5f5"
        />
      </BarChart>
    </div>
  );
}
  
export default AttributesChart;
  