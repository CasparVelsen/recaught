import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function Wind({ filteredCards }) {
  const findWind = filteredCards.map(card => card.wind);
  const filteredWind = [...new Set(findWind)].filter(item => item);

  const windArray = filteredWind.map((data, index) => {
    const filterForWind = filteredCards.filter(
      card => card.wind === data
    );
    const wind = filterForWind.map(data => data.catches.length);
    var numberCatches = lodash.sum(wind);
    const obj = { id: index, wind: data, catches: numberCatches };
    return obj;
  });

  const wind = {
    labels: windArray.map(data => data.wind),
    datasets: [
      {
        label: 'catches',
        data: windArray.map(data => data.catches),
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
        color: '#687a48',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={wind} options={options} />;
}

export default Wind;
