import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function WaterLevel({ filteredCardsByWater }) {
  const findWaterLevel = filteredCardsByWater.map(card => card.waterlevel);
  const filteredWaterLevel = [...new Set(findWaterLevel)].filter(item => item);

  const waterlevelArray = filteredWaterLevel.map((data, index) => {
    const filterForWaterLevel = filteredCardsByWater.filter(
      card => card.waterlevel === data
    );
    const waterlevel = filterForWaterLevel.map(data => data.catches.length);
    var numberCatches = lodash.sum(waterlevel);
    const obj = { id: index, waterlevel: data, catches: numberCatches };
    return obj;
  });

  const waterLevel = {
    labels: waterlevelArray.map(data => data.waterlevel),
    datasets: [
      {
        label: 'catches',
        data: waterlevelArray.map(data => data.catches),
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

  return <Line data={waterLevel} options={options} />;
}

export default WaterLevel;
