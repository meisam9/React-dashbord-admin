import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.css'

const Chart = ({title, data, datakey, grid}) => {
    

  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke='#5550db'/>
            <YAxis/>
            <Line type="monotone" dataKey={datakey} stroke='#5550db'/>
            <Tooltip/>
            { grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5.5'/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
