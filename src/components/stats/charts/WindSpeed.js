import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function WindSpeed({ filteredCardsByWater }) {
  const findWindSpeed = filteredCardsByWater.map(card => card.windspeed);
  const filteredWindSpeed = [...new Set(findWindSpeed)];
  filteredWindSpeed.sort();

  const windSpeedArray = filteredWindSpeed.map((data, index) => {
    const filterForWindSpeed = filteredCardsByWater.filter(
      card => card.windspeed === data
    );
    const windSpeed = filterForWindSpeed.map(data => data.catches.length);
    var numberCatches = lodash.sum(windSpeed);
    const obj = { id: index, windspeed: data, catches: numberCatches };
    return obj;
  });

  const windSpeed = {
    labels: windSpeedArray.map(data => data.windspeed),
    datasets: [
      {
        label: 'catches',
        data: windSpeedArray.map(data => data.catches),
        fill: true,
        backgroundColor: 'rgba(162, 195, 108, 0.5)',
        borderColor: '#687a48',
        borderWidth: 1.5,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Catches ',
        align: 'start',
        color: '#a2c36c',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={windSpeed} options={options} />;
}

export default WindSpeed;
