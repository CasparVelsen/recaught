import Airpressure from './charts/Airpressure';
import styled from 'styled-components';
import Weather from './charts/Weather';

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
      <Airpressure filteredCardsByTime={filteredCardsByTime} />
      <Weather filteredCardsByTime={filteredCardsByTime} />
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
