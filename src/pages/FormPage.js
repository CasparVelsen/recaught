import { NavLink } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { useState } from 'react';
import styled from 'styled-components';

import SubmitButton from '../components/Button';
import ScreenRaderOnly from '../components/ScreenRaderOnly';

import Start from '../components/form-pages/Start';
import Water from '../components/form-pages/Water';
import Weather from '../components/form-pages/Weather';
import Catch from '../components/form-pages/Catch';
import Summary from '../components/form-pages/Summary';

export default function FormPage({ onCreateCard }) {
  const [formData, setFormData] = useState('');

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log('formData', formData);
    onCreateCard(formData);
  }

  const [page, setPage] = useState(0);

  const PageTitles = [
    'Create a new entry',
    'Add water data',
    'Add weather data',
    'Add your catches',
    'Summary',
  ];

  return (
    <>
      <header>
        <LinkStyled to="/">
          <HiArrowLeft size={35} color="#FF9C27" />
        </LinkStyled>
      </header>
      <main>
        <Title>{PageTitles[page]}</Title>
        <Form
          aria-labelledby="form-name"
          onSubmit={handleSubmit}
          autoComplete="off"
          labeltext="form"
        >
          <Section>General infos</Section>
          <Start handleOnChange={handleOnChange} />
          <Section>Water</Section>
          <Water handleOnChange={handleOnChange} />
          <Section>Weather</Section>
          <Weather handleOnChange={handleOnChange} />
          <Section>Catch</Section>
          <Catch handleOnChange={handleOnChange} />
          <Section>Summary</Section>
          <Summary handleOnChange={handleOnChange} />
          <SubmitButton text="Submit" isAccent={true} id="form-name">
            <ScreenRaderOnly>Create your fishing experience</ScreenRaderOnly>
          </SubmitButton>
        </Form>
      </main>
    </>
  );
}

const Title = styled.h1`
  color: #687a48;
  font-size: 32px;
  width: 50%;
  margin: 0 0 20px;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const Form = styled.form`
  padding: 15px 10px 30px;
  background-color: #fffcf8;
  color: #a2c36c;
  border: 0.5px solid #a2c36c;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.25);
`;

const Section = styled.span`
  color: #687a48;
`;
