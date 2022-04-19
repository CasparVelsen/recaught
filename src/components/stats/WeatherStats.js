import Airpressure from './charts/Airpressure';
import styled from 'styled-components';
import Weather from './charts/Weather';
import Temperature from './charts/Temperatur';
import Moon from './charts/Moon';
import Wind from './charts/Wind';
import WindSpeed from './charts/WindSpeed';
import { useState } from 'react';

export default function WeatherStats({ filteredCardsByWater }) {
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
            <Weather filteredCardsByWater={filteredCardsByWater} />
          </div>
        )}
        {page === 1 && (
          <div>
            <h4>Temperature</h4>
            <Temperature filteredCardsByWater={filteredCardsByWater} />
          </div>
        )}
        {page === 2 && (
          <div>
            <h4>Airpressure</h4>
            <Airpressure filteredCardsByWater={filteredCardsByWater} />
          </div>
        )}
        {page === 3 && (
          <div>
            <h4>Moon</h4>
            <Moon filteredCardsByWater={filteredCardsByWater} />
          </div>
        )}
        {page === 4 && (
          <div>
            <h4>Wind direction</h4>
            <Wind filteredCardsByWater={filteredCardsByWater} />
          </div>
        )}
        {page === 5 && (
          <div>
            <h4>Wind speed</h4>
            <WindSpeed filteredCardsByWater={filteredCardsByWater} />
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
