"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Register the components you need
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgb(72, 187, 120)',
      tension: 0.1,
    },
  ],
};

const MyChart = () => (
  <div className='bg-gray-800  rounded-lg'>
    <h2 className='text-white m-5 py-5 px-auto font-poppins font-bold text-2xl'>Line Chart</h2>
    <Line data={data} />
  </div>
);

export default MyChart;
