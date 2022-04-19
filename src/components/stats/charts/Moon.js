import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function Moon({ filteredCardsByWater }) {
  const findMoon = filteredCardsByWater.map(card => card.moon);
  const filteredMoon = [...new Set(findMoon)];

  const moonArray = filteredMoon.map((data, index) => {
    const filterForMoon = filteredCardsByWater.filter(
      card => card.moon === data
    );
    const moon = filterForMoon.map(data => data.catches.length);
    var numberCatches = lodash.sum(moon);
    const obj = { id: index, moon: data, catches: numberCatches };
    return obj;
  });

  const moon = {
    labels: moonArray.map(data => data.moon),
    datasets: [
      {
        label: 'catches',
        data: moonArray.map(data => data.catches),
      },
    ],
  };

  return <Line data={moon} />;
}

export default Moon;
