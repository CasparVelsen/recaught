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
          <StatsContainer>
            <Title>Weather:</Title>
            <Weather filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
        {page === 1 && (
          <StatsContainer>
            <Title>Temperature:</Title>
            <Temperature filteredCardsByWater={filteredCardsByWater} />
            <Legend>°C</Legend>
          </StatsContainer>
        )}
        {page === 2 && (
          <StatsContainer>
            <Title>Airpressure:</Title>
            <Airpressure filteredCardsByWater={filteredCardsByWater} />
            <Legend>hPa</Legend>
          </StatsContainer>
        )}
        {page === 3 && (
          <StatsContainer>
            <Title>Moon:</Title>
            <Moon filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
        {page === 4 && (
          <StatsContainer>
            <Title>Wind direction:</Title>
            <Wind filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
        {page === 5 && (
          <StatsContainer>
            <Title>Wind speed:</Title>
            <WindSpeed filteredCardsByWater={filteredCardsByWater} />
            <Legend>km/h</Legend>
          </StatsContainer>
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

const Title = styled.div`
  margin: 10px 0;
`;

const StatsContainer = styled.div`
  position: relative;
`;

const Legend = styled.div`
  position: absolute;
  right: 8px;
  bottom: 5px;
  font-size: 0.6rem;
  font-weight: bold;
`;
