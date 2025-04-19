import styled from 'styled-components';
import { useState } from 'react';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineRightCircle,
} from 'react-icons/ai';
import axios from 'axios';
import LocationSelect from './LocationSelect';

const initialValues = {
  weather: '',
  temperature: '',
  airpressure: '',
  moon: '',
  wind: '',
  windspeed: '',
};

export default function Weather({ handleAddWeather }) {
  const [weather, setWeather] = useState(initialValues); // Weather-State mit initialen Werten
  const [location, setLocation] = useState('');
  const [showLocationInput, setShowLocationInput] = useState(false);

  const [showInputs, setShowInputs] = useState(true);
  function toggleShowInputs() {
    setShowInputs(!showInputs);
  }

  const handleGenerate = () => {
    setShowLocationInput(prevState => !prevState);
  };

  const handleSubmitLocation = async () => {
    if (!location) return;

    try {
      // 1. Holen der Koordinaten von OpenWeather
      const weatherResponse = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: location,
            appid: 'b0407075a586294bcaf6c05e44f80fbb',
            units: 'metric',
          },
        }
      );

      const weatherDescription =
        weatherResponse.data.weather[0].description.toLowerCase();
      let parsedWeather = '';

      if (weatherDescription.includes('clear sky')) parsedWeather = 'sunny';
      else if (weatherDescription.includes('few clouds'))
        parsedWeather = 'sunny';
      else if (weatherDescription.includes('scattered clouds'))
        parsedWeather = 'sunny';
      else if (weatherDescription.includes('broken clouds'))
        parsedWeather = 'cloudy';
      else if (weatherDescription.includes('overcast clouds'))
        parsedWeather = 'cloudy';
      else if (weatherDescription.includes('rain')) parsedWeather = 'rainy';
      else if (weatherDescription.includes('snow')) parsedWeather = 'snow';
      else if (
        weatherDescription.includes('mist') ||
        weatherDescription.includes('fog') ||
        weatherDescription.includes('haze')
      )
        parsedWeather = 'foggy';
      else parsedWeather = 'stormy';

      const windDeg = weatherResponse.data.wind.deg;
      let windDir = '';
      if (windDeg >= 0 && windDeg <= 22.5) windDir = 'north';
      else if (windDeg > 22.5 && windDeg <= 67.5) windDir = 'northeast';
      else if (windDeg > 67.5 && windDeg <= 112.5) windDir = 'east';
      else if (windDeg > 112.5 && windDeg <= 157.5) windDir = 'southeast';
      else if (windDeg > 157.5 && windDeg <= 202.5) windDir = 'south';
      else if (windDeg > 202.5 && windDeg <= 247.5) windDir = 'southwest';
      else if (windDeg > 247.5 && windDeg <= 292.5) windDir = 'west';
      else if (windDeg > 292.5 && windDeg <= 337.5) windDir = 'northwest';
      else windDir = 'north';

      const newWeather = {
        weather: parsedWeather,
        temperature: Math.round(weatherResponse.data.main.temp) || '',
        airpressure: weatherResponse.data.main.pressure || '',
        wind: windDir || '',
        moon: weather.moon,
        windspeed: Math.round(weatherResponse.data.wind.speed) || '',
      };

      setWeather(newWeather);
      handleAddWeather(newWeather);
      setLocation('');
      setShowLocationInput(false);
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    const updatedWeather = {
      ...weather,
      [name]: value,
    };
    setWeather(updatedWeather);
    handleAddWeather(updatedWeather);
  };

  return (
    <>
      <Section>
        <div onClick={toggleShowInputs}>
          <Title>
            Add weather data:
            {showInputs && (
              <AiOutlinePlusCircle onClick={toggleShowInputs} color="#FF9C27" />
            )}
            {!showInputs && (
              <AiOutlineMinusCircle
                onClick={toggleShowInputs}
                color="#FF9C27"
              />
            )}
          </Title>
        </div>
        {!showInputs && (
          <Fieldset>
            <Part>
              <label htmlFor="weather">Weather</label>
              <Select
                id="weather"
                name="weather"
                type="text"
                onChange={handleChange}
                value={weather.weather || ''}
              >
                <option value="sunny">sunny</option>
                <option value="cloudy">cloudy</option>
                <option value="rainy">rainy</option>
                <option value="stormy">stormy</option>
                <option value="foggy">foggy</option>
                <option value="snow">snow</option>
              </Select>
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
                onChange={handleChange}
                placeholder="°C"
                value={weather.temperature}
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
                onChange={handleChange}
                placeholder="850 - 1150"
                value={weather.airpressure}
              />
            </Part>
            <Part>
              <label htmlFor="moon">Moon phase</label>
              <Select
                id="moon"
                name="moon"
                type="text"
                maxLength={100}
                onChange={handleChange}
                value={weather.moon || ''}
              >
                <option value="">select</option>
                <option value="new moon">new moon</option>
                <option value="increasing moon">increasing moon</option>
                <option value="full moon">full moon</option>
                <option value="waning moon">waning moon</option>
              </Select>
            </Part>
            <Part>
              <label htmlFor="wind">Wind direction</label>
              <Select
                id="wind"
                name="wind"
                type="text"
                maxLength={100}
                onChange={handleChange}
                value={weather.wind || ''}
              >
                <option value="east">east</option>
                <option value="southeast">south east</option>
                <option value="south">south</option>
                <option value="southwest">south west</option>
                <option value="west">west</option>
                <option value="northwest">north west</option>
                <option value="north">north</option>
                <option value="northeast">north east</option>
              </Select>
            </Part>
            <Part>
              <label htmlFor="windspeed">Wind speed</label>
              <Input
                id="windspeed"
                name="windspeed"
                type="number"
                min={0}
                onChange={handleChange}
                placeholder="min 0km/h"
                value={weather.windspeed}
              />
            </Part>
            {!showLocationInput && (
              <Wrapper>
                <GenerateButton onClick={handleGenerate}>
                  generate
                </GenerateButton>
                <AiOutlineRightCircle
                  color="#FF9C27"
                  onClick={handleGenerate}
                />
              </Wrapper>
            )}
            {showLocationInput && (
              <LocationSelect
                setLocation={setLocation}
                submitLocation={handleSubmitLocation}
                location={location}
                handleGenerate={handleGenerate}
              />
            )}
          </Fieldset>
        )}
      </Section>
    </>
  );
}

const Section = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 5px 10px;
  border: 0.5px solid #a2c36c;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  margin-top: 20px;
`;

const Title = styled.div`
  color: #687a48;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 10px 0 20px;
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
  background-color: white;
  height: 25px;
`;

const Select = styled.select`
  width: 100%;
  border: 1px solid #ff9c27;
  padding: 2px 5px;
  border-radius: 5px;
  color: #aaa;
  background-color: white;
  height: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const GenerateButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
  color: #ff9c27;
  padding: 0;
  text-align: left;
`;
