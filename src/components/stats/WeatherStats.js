import Airpressure from './charts/weather/Airpressure';
import styled from 'styled-components';
import Weather from './charts/weather/Weather';
import Temperature from './charts/weather/Temperatur';
import Moon from './charts/weather/Moon';
import Wind from './charts/weather/Wind';
import WindSpeed from './charts/weather/WindSpeed';
import { useState } from 'react';
import WaterTemp from './charts/weather/WaterTemp';
import WaterColor from './charts/weather/WaterColor';
import WaterLevel from './charts/weather/WaterLevel';
import { IoIosArrowDown } from 'react-icons/io';

export default function WeatherStats({ filteredCardsByWater }) {
  const [page, setPage] = useState("Weather");

  function handleChange(event) {
    setPage(event.target.value);
    handleSubmit(event);
  }

  function handleSubmit(event) {
    event.preventDefault();
}

  return (
    <>
      <Wrapper>
      <IoIosArrowDown color= "#687a48" />
        <form onSubmit={handleSubmit}>
          <Select id="charts" name="selectedCharts" onChange={handleChange}>
              <option >Weather</option>
              <option >Temperature</option>
              <option >Airpressure</option>
              <option >Moon</option>
              <option >Wind</option>
              <option >Windspeed</option>
              <option >Watertemperature</option>
              <option >Watercolor</option>
              <option >Waterlevel</option>
          </Select>
        </form>
      </Wrapper>
      <div>
        {page === "Weather" && (
          <StatsContainer>
            <Weather filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
        {page === "Temperature" && (
          <StatsContainer>
            <Temperature filteredCardsByWater={filteredCardsByWater} />
            <Legend> °C</Legend>
          </StatsContainer>
        )}
        {page === "Airpressure" && (
          <StatsContainer>
            <Airpressure filteredCardsByWater={filteredCardsByWater} />
            <Legend> hPa</Legend>
          </StatsContainer>
        )}
        {page === "Moon" && (
          <StatsContainer>
            <Moon filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
        {page === "Wind" && (
          <StatsContainer>
            <Wind filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
        {page === "Windspeed" && (
          <StatsContainer>
            <WindSpeed filteredCardsByWater={filteredCardsByWater} />
            <Legend> km/h</Legend>
          </StatsContainer>
        )}
        {page === "Watertemperature" && (
          <StatsContainer>
            <WaterTemp filteredCardsByWater={filteredCardsByWater} />
            <Legend> °C</Legend>
          </StatsContainer>
        )}
        {page === "Watercolor" && (
          <StatsContainer>
            <WaterColor filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
        {page === "Waterlevel" && (
          <StatsContainer>
            <WaterLevel filteredCardsByWater={filteredCardsByWater} />
          </StatsContainer>
        )}
      </div>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
`;

const Select = styled.select`
  border: none;
  background-color: transparent;
  color: #687a48;
  font-weight: bold;
  font-size: 1.2rem;
  -webkit-appearance: none; /* verhindert, dass der Browser eigene Styles draufhaut */
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;  /* Keine Umrandung bei Fokus */
    border: none;   /* Keine Border bei Fokus */
  }
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

const StatsContainer = styled.div`
  position: relative;
  padding-right: 10px;
`;

const Legend = styled.div`
  position: absolute;
  left: 60px;
  top: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #687a48;
`;
