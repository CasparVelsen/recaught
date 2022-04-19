import Airpressure from './charts/Airpressure';
import styled from 'styled-components';
import Weather from './charts/Weather';
import Temperature from './charts/Temperatur';
import Moon from './charts/Moon';
import Wind from './charts/Wind';
import WindSpeed from './charts/WindSpeed';
import { useState } from 'react';

export default function WeatherStats({ filteredCardsByTime }) {
  const [page, setPage] = useState(0);

  console.log(page);

  return (
    <>
      <Select>
        <option onClick={() => setPage(0)}>Weather</option>
        <option onClick={() => setPage(1)}>Temperature</option>
        <option onClick={() => setPage(2)}>Air pressure</option>
        <option onClick={() => setPage(3)}>Moon</option>
        <option onClick={() => setPage(4)}>Wind</option>
        <option onClick={() => setPage(5)}>Wind speed</option>
      </Select>
      <div>
        {page === 0 && (
          <div>
            <h4>Weather</h4>
            <Weather filteredCardsByTime={filteredCardsByTime} />
          </div>
        )}
        {page === 1 && (
          <div>
            <h4>Temperature</h4>
            <Temperature filteredCardsByTime={filteredCardsByTime} />
          </div>
        )}
        {page === 2 && (
          <div>
            <h4>Airpressure</h4>
            <Airpressure filteredCardsByTime={filteredCardsByTime} />
          </div>
        )}
        {page === 3 && (
          <div>
            <h4>Moon</h4>
            <Moon filteredCardsByTime={filteredCardsByTime} />
          </div>
        )}
        {page === 4 && (
          <div>
            <h4>Wind direction</h4>
            <Wind filteredCardsByTime={filteredCardsByTime} />
          </div>
        )}
        {page === 5 && (
          <div>
            <h4>Wind speed</h4>
            <WindSpeed filteredCardsByTime={filteredCardsByTime} />
          </div>
        )}
      </div>
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
