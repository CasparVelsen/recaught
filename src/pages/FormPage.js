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

export default function FormPage({ onCreateCard }) {
  const [formData, setFormData] = useState({});

  async function handleAddCatch(catchValue) {
    const previousCatches = formData.catches ?? [];
    setFormData({
      ...formData,
      catches: [...previousCatches, catchValue],
    });
  }

  async function handleDeleteCatch(_id) {
    const filteredCatches = formData.catches.filter(fish => fish._id !== _id);
    setFormData({
      ...formData,
      catches: filteredCatches,
    });

    await fetch('api/catches', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
  }

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
      <main>
        <form
          aria-labelledby="form-name"
          onSubmit={handleSubmit}
          autoComplete="off"
          labeltext="form"
        >
          <Title>Your fishing</Title>
          <Title>experience:</Title>
          <Inputs>
            <Start handleOnChange={handleOnChange} />
            <Water handleOnChange={handleOnChange} />
            <Weather handleOnChange={handleOnChange} />
            <Catch
              handleAddCatch={handleAddCatch}
              deleteCatch={handleDeleteCatch}
              catches={formData.catches}
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
      </main>
    </>
  );
}

const ButtonToRight = styled.div`
  display: flex;
  justify-content: right;
`;

const Title = styled.h1`
  color: #687a48;
  font-size: 32px;
  width: 100%;
  margin: 0;
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
`;
