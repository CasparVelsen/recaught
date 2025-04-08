import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function WaterColor({ filteredCardsByWater }) {
  const findWaterColor = filteredCardsByWater.map(card => card.watercolor);
  console.log(findWaterColor)
  const filteredWaterColor = [...new Set(findWaterColor)].filter(item => item);

  console.log(filteredWaterColor);

  const watercolorArray = filteredWaterColor.map((data, index) => {
    const filterForWaterColor = filteredCardsByWater.filter(
      card => card.watercolor === data
    );
    const watercolor = filterForWaterColor.map(data => data.catches.length);
    var numberCatches = lodash.sum(watercolor);
    const obj = { id: index, watercolor: data, catches: numberCatches };
    return obj;
  });

  const waterColor = {
    labels: watercolorArray.map(data => data.watercolor),
    datasets: [
      {
        label: 'catches',
        data: watercolorArray.map(data => data.catches),
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

  return <Line data={waterColor} options={options} />;
}

export default WaterColor;
