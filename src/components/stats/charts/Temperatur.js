import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function Temperature({ filteredCardsByWater }) {
  const findTemperature = filteredCardsByWater.map(card => card.temperature);
  const filteredTemperature = [...new Set(findTemperature)];
  filteredTemperature.sort();

  const temperatureArray = filteredTemperature.map((data, index) => {
    const filterForTemperature = filteredCardsByWater.filter(
      card => card.temperature === data
    );
    const temperature = filterForTemperature.map(data => data.catches.length);
    var numberCatches = lodash.sum(temperature);
    const obj = { id: index, temperature: data, catches: numberCatches };
    return obj;
  });

  const temperature = {
    labels: temperatureArray.map(data => data.temperature),
    datasets: [
      {
        label: 'catches',
        data: temperatureArray.map(data => data.catches),
      },
    ],
  };

  return <Line data={temperature} />;
}

export default Temperature;
