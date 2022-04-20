import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Species({ filteredCardsByWater }) {
  const findSpecies = filteredCardsByWater.map(card =>
    card.catches.map(data => data.species)
  );
  const species = findSpecies.flat();

  const count = {};

  species.forEach(item => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });

  const numbers = Object.values(count);

  const noDubsSpecies = [...new Set(species)];

  const data = {
    datasets: [
      {
        data: numbers,
        backgroundColor: [
          '#a2c36c',
          '#ffcd93',
          '#d2c86b',
          '#ec975f',
          '#b0632f',
          '#87966b',
          '#ec975f',
          '#a8ae9c',
        ],
      },
    ],
    labels: noDubsSpecies,
  };

  const options = {
    radius: 130,
    animation: { animateScale: true },
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default Species;
