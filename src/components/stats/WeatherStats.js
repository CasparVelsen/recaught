import LineChart from './charts/LineChart';

export default function WeatherStats({ filteredCardsByTime }) {
  return (
    <>
      <LineChart filteredCardsByTime={filteredCardsByTime} />
    </>
  );
}
