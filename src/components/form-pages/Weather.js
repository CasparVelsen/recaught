import styled from 'styled-components';

export default function Weather({ handleOnChange, formData }) {
  return (
    <>
      <Fieldset>
        <Part>
          <label htmlFor="weather">Weather</label>
          <Input
            id="weather"
            name="weather"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
            value={formData.weather}
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
            value={formData.temperature}
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
            value={formData.airpressure}
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
            value={formData.moon}
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
            value={formData.wind}
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
            value={formData.windspeed}
            placeholder="min 0km/h"
          />
        </Part>
      </Fieldset>
    </>
  );
}

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
