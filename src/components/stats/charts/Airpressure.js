import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function Airpressure({ filteredCardsByTime }) {
  const findAirpressure = filteredCardsByTime.map(card => card.airpressure);
  const filteredAirpressure = [...new Set(findAirpressure)];
  filteredAirpressure.sort();
  console.log(filteredAirpressure);

  const airpressureArray = filteredAirpressure.map((data, index) => {
    const filterForAirpressure = filteredCardsByTime.filter(
      card => card.airpressure === data
    );
    const catches = filterForAirpressure.map(data => data.catches.length);
    var numberCatches = lodash.sum(catches);
    const obj = { id: index, airpressure: data, catches: numberCatches };
    return obj;
  });

  console.log(airpressureArray);

  const airpressure = {
    labels: airpressureArray.map(data => data.airpressure),
    datasets: [
      {
        label: 'catches',
        data: airpressureArray.map(data => data.catches),
      },
    ],
  };

  return <Line data={airpressure} />;
}

export default Airpressure;
