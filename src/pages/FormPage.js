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
          <Title>Create a</Title>
          <Title>new entry:</Title>
          <Small>1 of 5</Small>
          <Progressbar>
            <div
              style={{
                width: '20%',
              }}
            ></div>
          </Progressbar>
          <Start formData={formData} />
          <Water formData={formData} />
          <Weather formData={formData} />
          <Catch formData={formData} />
          <Summary formData={formData} />
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
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const Progressbar = styled.div`
  border: 0.5px solid #ff9c27;
  height: 10px;
  border-radius: 10px;
  margin: 15px 0 15px;

  div {
    width: 20%;
    height: 100%;
    background-color: #a2c36c;
    border-radius: 10px;
  }
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
