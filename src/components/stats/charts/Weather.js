import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function Weather({ filteredCardsByWater }) {
  const findWeather = filteredCardsByWater.map(card => card.weather);
  const filteredWeather = [...new Set(findWeather)];
  filteredWeather.sort();

  const weatherArray = filteredWeather.map((data, index) => {
    const filterForWeather = filteredCardsByWater.filter(
      card => card.weather === data
    );
    const catches = filterForWeather.map(data => data.catches.length);
    var numberCatches = lodash.sum(catches);
    const obj = { id: index, weather: data, catches: numberCatches };
    return obj;
  });

  const weather = {
    labels: weatherArray.map(data => data.weather),
    datasets: [
      {
        label: 'catches',
        data: weatherArray.map(data => data.catches),
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

  return <Line data={weather} options={options} />;
}

export default Weather;
