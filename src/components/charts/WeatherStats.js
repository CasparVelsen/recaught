import lodash from 'lodash';

export default function WeatherStats({ filteredCardsByTime }) {
  console.log(filteredCardsByTime);

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

  return (
    <>
      <div>best...</div>
      <div>...airpressure =</div>
    </>
  );
}
