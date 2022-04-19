import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function WindSpeed({ filteredCardsByTime }) {
  const findWindSpeed = filteredCardsByTime.map(card => card.windspeed);
  const filteredWindSpeed = [...new Set(findWindSpeed)];
  filteredWindSpeed.sort();

  const windSpeedArray = filteredWindSpeed.map((data, index) => {
    const filterForWindSpeed = filteredCardsByTime.filter(
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
      },
    ],
  };

  return <Line data={windSpeed} />;
}

export default WindSpeed;
