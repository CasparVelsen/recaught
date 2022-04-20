import Airpressure from './charts/weather/Airpressure';
import styled from 'styled-components';
import Weather from './charts/weather/Weather';
import Temperature from './charts/weather/Temperatur';
import Moon from './charts/weather/Moon';
import Wind from './charts/weather/Wind';
import WindSpeed from './charts/weather/WindSpeed';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import WaterTemp from './charts/weather/WaterTemp';
import WaterColor from './charts/weather/WaterColor';
import WaterLevel from './charts/weather/WaterLevel';

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
            <button onClick={() => setPage(0)}>Weather</button>
            <button onClick={() => setPage(1)}>Temperature</button>
            <button onClick={() => setPage(2)}>Air pressure</button>
            <button onClick={() => setPage(3)}>Moon</button>
            <button onClick={() => setPage(4)}>Wind</button>
            <button onClick={() => setPage(5)}>Wind speed</button>
            <button onClick={() => setPage(6)}>Water temperature</button>
            <button onClick={() => setPage(7)}>Water color</button>
            <button onClick={() => setPage(8)}>Water level</button>
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
            <Legend> °C</Legend>
          </StatsContainer>
        )}
        {page === 2 && (
          <StatsContainer>
            <Title>Airpressure:</Title>
            <Airpressure filteredCardsByWater={filteredCardsByWater} />
            <Legend> hPa</Legend>
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
            <Legend> km/h</Legend>
          </StatsContainer>
        )}
        {page === 6 && (
          <StatsContainer>
            <Title>Water temperature:</Title>
            <WaterTemp filteredCardsByWater={filteredCardsByWater} />
            <Legend> °C</Legend>
          </StatsContainer>
        )}
        {page === 7 && (
          <StatsContainer>
            <Title>Water color:</Title>
            <WaterColor filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
        {page === 8 && (
          <StatsContainer>
            <Title>Water level:</Title>
            <WaterLevel filteredCardsByWater={filteredCardsByWater} />
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
  height: 30px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 10px;
  height: 110px;
  overflow-y: auto;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100%;
    border: none;
    border-top: 0.5px solid #eee;
    background-color: white;
    padding: 10px;
    color: #aaa;
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
  left: 60px;
  top: 31px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #687a48;
`;
