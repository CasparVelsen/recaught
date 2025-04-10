import { NavLink } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { useState } from 'react';
import styled from 'styled-components';

import ScreenRaderOnly from '../components/ScreenRaderOnly';
import SubmitButton from '../components/SubmitButton';
import Start from '../components/form-pages/Start';
import Water from '../components/form-pages/Water';
import Weather from '../components/form-pages/Weather';
import Catch from '../components/form-pages/Catch';
import Summary from '../components/form-pages/Summary';
import DepthMap from '../images/DepthMap.svg';
import PageTitle from '../components/PageTitle';

export default function FormPage({ onCreateCard, profile, profileCards }) {
  const [formData, setFormData] = useState({});
  const [catchData, setCatchData] = useState([]);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      author: profile._id,
    });
  };

  const handleAddWeather = weather => {
    setFormData(formData => ({
      ...formData,
      weather: weather.weather,
      temperature: weather.temperature,
      airpressure: weather.airpressure,
      wind: weather.wind,
      moon: weather.moon,
      windspeed: weather.windspeed,
    }));
  };

  async function handleAddCatch(catchValue) {
    const previousCatches = formData.catches ?? [];
    setFormData({
      ...formData,
      catches: [...previousCatches, catchValue],
    });
    setCatchData([...catchData, catchValue]);
  }

  async function handleDeleteCatch(_id) {
    const filteredCatches = formData.catches.filter(fish => fish._id !== _id);
    setFormData({
      ...formData,
      catches: filteredCatches,
    });
  }

  function handleSubmit() {
    onCreateCard(formData);
  }

  return (
    <>
      <header>
        <LinkStyled to="/">
          <HiArrowLeft size={35} color="#FF9C27" />
        </LinkStyled>
      </header>
      <Main>
        <Map src={DepthMap} alt="DepthMap" />
        <form
          aria-labelledby="form-name"
          onSubmit={handleSubmit}
          autoComplete="off"
          labeltext="form"
        >
          <PageTitle text="Your fishing experience:" />
          <Inputs>
            <Start handleOnChange={handleOnChange} />
            <Water handleOnChange={handleOnChange} />
            <Weather handleAddWeather={handleAddWeather} />
            <Catch
              handleAddCatch={handleAddCatch}
              deleteCatch={handleDeleteCatch}
              catches={formData.catches}
              profile={profile}
              profileCards={profileCards}
            />
            <Summary handleOnChange={handleOnChange} />
            <ButtonToRight>
              <SubmitButton text="Save" isAccent={true} id="form-name">
                <ScreenRaderOnly>
                  Create your fishing experience
                </ScreenRaderOnly>
              </SubmitButton>
            </ButtonToRight>
          </Inputs>
        </form>
      </Main>
    </>
  );
}

const ButtonToRight = styled.div`
  display: flex;
  justify-content: right;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const Inputs = styled.div`
  padding: 15px 10px 30px;
  background-color: #fffcf8;
  color: #a2c36c;
  border: 0.5px solid #a2c36c;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  margin-bottom: 68px;
`;

const Map = styled.img`
  position: fixed;
  top: 0;
  right: 50px;
  height: 200px;
  z-index: -5;
`;

const Main = styled.div`
  margin: 10px;
  padding-bottom: 68px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
