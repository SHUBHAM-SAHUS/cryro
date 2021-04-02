import React from "react";
import { Line } from "react-chartjs-2";



const LineChart = ({ height, data, options }) => (
    <Line height= '200' data={data} options={options} />
);

export default LineChart;



