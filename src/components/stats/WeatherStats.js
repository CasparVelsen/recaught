import Airpressure from './charts/Airpressure';
import styled from 'styled-components';
import Weather from './charts/Weather';
import Temperature from './charts/Temperatur';
import Moon from './charts/Moon';
import Wind from './charts/Wind';
import WindSpeed from './charts/WindSpeed';

export default function WeatherStats({ filteredCardsByTime }) {
  return (
    <>
      <Select>
        <option>Weather</option>
        <option>Temperature</option>
        <option>Air pressure</option>
        <option>Moon</option>
        <option>Wind</option>
        <option>Wind speed</option>
      </Select>
      <h4>Weather</h4>
      <Weather filteredCardsByTime={filteredCardsByTime} />
      <h4>Temperature</h4>
      <Temperature filteredCardsByTime={filteredCardsByTime} />
      <h4>Airpressure</h4>
      <Airpressure filteredCardsByTime={filteredCardsByTime} />
      <h4>Moon</h4>
      <Moon filteredCardsByTime={filteredCardsByTime} />
      <h4>Wind direction</h4>
      <Wind filteredCardsByTime={filteredCardsByTime} />
      <h4>Wind speed</h4>
      <WindSpeed filteredCardsByTime={filteredCardsByTime} />
    </>
  );
}

const Select = styled.select`
  width: 100%;
  border: 1px solid #ff9c27;
  border-radius: 5px;
  color: #aaa;
  background-color: white;
  height: 30px;
  font-size: 1rem;
`;
