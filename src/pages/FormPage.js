import { NavLink } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { useState } from 'react';
import styled from 'styled-components';

import {
  HiCheckCircle,
  HiArrowCircleRight,
  HiArrowCircleLeft,
} from 'react-icons/hi';

import Start from '../components/form-pages/Start';
import Water from '../components/form-pages/Water';
import Weather from '../components/form-pages/Weather';
import Catch from '../components/form-pages/Catch';
import Summary from '../components/form-pages/Summary';
import NormalButton from '../components/NormalButton';

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

  return (
    <>
      <header>
        <LinkStyled to="/">
          <HiArrowLeft size={35} color="#FF9C27" />
        </LinkStyled>
      </header>
      <main>
        <Form
          aria-labelledby="form-name"
          onSubmit={handleSubmit}
          autoComplete="off"
          labeltext="form"
        >
          <Start onChange={handleOnChange} />
          <Water onChange={handleOnChange} />
          <Weather onChange={handleOnChange} />
          <Catch onChange={handleOnChange} />
          <Summary onChange={handleOnChange} />
          <Buttons>
            <NormalButton
              text={[<HiArrowCircleLeft />, 'Back']}
              onClick={event => {
                event.preventDefault();
              }}
            />
            <NormalButton
              text={['Next', <HiArrowCircleRight />]}
              isAccent={true}
              onClick={event => {
                event.preventDefault();
              }}
            />
          </Buttons>
        </Form>
      </main>
    </>
  );
}

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
  position: relative;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: right;
`;
