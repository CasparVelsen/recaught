import styled from 'styled-components';

export default function Weather({ handleOnChange }) {
  return (
    <>
      <Title>Add</Title>
      <Title>weather data:</Title>
      <Small>3 of 5</Small>
      <Progressbar>
        <div></div>
      </Progressbar>
      <Fieldset>
        <Part>
          <label htmlFor="weather">Weather</label>
          <Input
            id="weather"
            name="weather"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
          />
        </Part>
        <Part>
          <label htmlFor="temperature">Temperature</label>
          <Input
            id="temperature"
            name="temperature"
            type="number"
            min={-50}
            max={50}
            maxLength={100}
            onChange={handleOnChange}
            placeholder="°C"
          />
        </Part>
        <Part>
          <label htmlFor="airpressure">Air pressure</label>
          <Input
            id="airpressure"
            name="airpressure"
            type="number"
            min={850}
            max={1150}
            onChange={handleOnChange}
            placeholder="850 - 1150"
          />
        </Part>
        <Part>
          <label htmlFor="moon">Moon phase</label>
          <Input
            id="moon"
            name="moon"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
          />
        </Part>
        <Part>
          <label htmlFor="wind">Wind direction</label>
          <Input
            id="wind"
            name="wind"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
          />
        </Part>
        <Part>
          <label htmlFor="windspeed">Wind speed</label>
          <Input
            id="windspeed"
            name="windspeed"
            type="number"
            min={0}
            onChange={handleOnChange}
            placeholder="min 0km/h"
          />
        </Part>
      </Fieldset>
    </>
  );
}

const Title = styled.h1`
  color: #687a48;
  font-size: 32px;
  width: 100%;
  margin: 0;
`;
const Small = styled.small`
  font-size: 0.8rem;
  color: #aaa;
  position: absolute;
  right: 10px;
  top: 70px;
  background-color: #fffcf8;
`;
const Progressbar = styled.div`
  border: 0.5px solid #ff9c27;
  height: 10px;
  border-radius: 10px;
  margin: 15px 0 15px;

  div {
    width: 60%;
    height: 100%;
    background-color: #a2c36c;
    border-radius: 10px;
  }
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 10px 0 30px;
  border: none;
  position: relative;
  font-size: 1rem;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ff9c27;
  padding: 2px 5px;
  border-radius: 5px;
  color: #aaa;
`;
