import Airpressure from './charts/weather/Airpressure';
import styled from 'styled-components';
import Weather from './charts/weather/Weather';
import Temperature from './charts/weather/Temperatur';
import Moon from './charts/weather/Moon';
import Wind from './charts/weather/Wind';
import WindSpeed from './charts/weather/WindSpeed';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

export default function WeatherStats({ filteredCardsByWater }) {
  const [showOptions, setShowOptions] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <>
      <Select onClick={() => setShowOptions(!showOptions)}>
        <Header>
          select statistics for:
          {!showOptions && <IoIosArrowForward size={20} color={'#a2c36c'} />}
          {showOptions && <IoIosArrowDown size={20} color={'#a2c36c'} />}
        </Header>

        {showOptions && (
          <Options>
            <div>
              <button onClick={() => setPage(0)}>Weather</button>
              <button onClick={() => setPage(1)}>Temperature</button>
              <button onClick={() => setPage(2)}>Air pressure</button>
            </div>
            <div>
              <button onClick={() => setPage(3)}>Moon</button>
              <button onClick={() => setPage(4)}>Wind</button>
              <button onClick={() => setPage(5)}>Wind speed</button>
            </div>
          </Options>
        )}
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
            <Legend>/ °C</Legend>
          </StatsContainer>
        )}
        {page === 2 && (
          <StatsContainer>
            <Title>Airpressure:</Title>
            <Airpressure filteredCardsByWater={filteredCardsByWater} />
            <Legend>/ hPa</Legend>
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
            <Legend>/ km/h</Legend>
          </StatsContainer>
        )}
      </div>
    </>
  );
}

const Select = styled.div`
  width: 100%;
  border: 1px solid #a2c36c;
  border-radius: 10px;
  color: #aaa;
  background-color: white;
  font-size: 1rem;
  padding: 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  background-color: white;
  margin: 10px 0;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100%;
    border: 1px solid #a2c36c;
    border-radius: 10px;
    background-color: white;
    padding: 5px;
    margin-bottom: 10px;
    color: #aaa;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  }
`;

const Title = styled.div`
  margin: 10px 0 0 0;
`;

const StatsContainer = styled.div`
  position: relative;
  padding-right: 10px;
`;

const Legend = styled.div`
  position: absolute;
  left: 52px;
  top: 31px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #687a48;
`;
