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
        layout="vertical"
        barGap={20}
        margin={{right: 55}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          dataKey={attribute}
          tickFormatter={formatNumberString}
          interval="preserveStart"
          allowDataOverflow
        />
        <YAxis
          width={125}
          type="category"
          dataKey="name"
          interval={0}
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
  