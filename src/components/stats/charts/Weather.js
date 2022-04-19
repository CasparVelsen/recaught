import { Line } from 'react-chartjs-2';
import lodash from 'lodash';
import { Chart as ChartJS } from 'chart.js/auto';

function Weather({ filteredCardsByTime }) {
  const findWeather = filteredCardsByTime.map(card => card.weather);
  const filteredWeather = [...new Set(findWeather)];
  filteredWeather.sort();
  console.log(filteredWeather);

  const weatherArray = filteredWeather.map((data, index) => {
    const filterForWeather = filteredCardsByTime.filter(
      card => card.weather === data
    );
    const catches = filterForWeather.map(data => data.catches.length);
    var numberCatches = lodash.sum(catches);
    const obj = { id: index, weather: data, catches: numberCatches };
    return obj;
  });

  console.log(weatherArray);

  const weather = {
    labels: weatherArray.map(data => data.weather),
    datasets: [
      {
        label: 'catches',
        data: weatherArray.map(data => data.catches),
      },
    ],
  };

  return <Line data={weather} />;
}

export default Weather;
