import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const VolumeGraph = ({ data }) => {
  if (!data || !data.efficiencies || !data.volumes) {
    return <div>No graph data available</div>;
  }

  const chartData = {
    labels: data.efficiencies.map((eff) => eff.toFixed(2)),
    datasets: [
      {
        label: 'Volume vs Efficiency',
        data: data.volumes,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'CSTR Volume vs Efficiency',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Efficiency',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Volume',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default VolumeGraph;
