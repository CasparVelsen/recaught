import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function Wind({ filteredCardsByTime }) {
  const findWind = filteredCardsByTime.map(card => card.wind);
  const filteredWind = [...new Set(findWind)];

  const windArray = filteredWind.map((data, index) => {
    const filterForWind = filteredCardsByTime.filter(
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
      },
    ],
  };

  return <Line data={wind} />;
}

export default Wind;
