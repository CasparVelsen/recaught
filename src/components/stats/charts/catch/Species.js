import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import styled from 'styled-components';

function Species({ sortedSpecies }) {
  console.log(sortedSpecies);
  const speciesArray = Array.isArray(sortedSpecies) ? sortedSpecies : [];

  console.log(speciesArray);

  const data = {
    datasets: [
      {
        data: speciesArray.map(item => item.count),
        backgroundColor: [
          '#a2c36c',
          '#ffcd93',
          '#d2c86b',
          '#ec975f',
          '#b0632f',
          '#87966b',
          '#ec975f',
          '#a8ae9c',
          '#a3b08c',
          '#f3c98c',
        ],
      },
    ],
    labels: speciesArray.map(item => item.species),
  };

  const options = {
    animation: { animateScale: true },
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
  };

  return (
    <ChartContainer>
      <Chart>
        <Pie data={data} options={options} />
      </Chart>
    </ChartContainer>
  );
}

const Chart = styled.div`
  width: 60%;
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Species;
