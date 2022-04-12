import { HiArrowLeft } from 'react-icons/hi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import ScreenRaderOnly from '../components/ScreenRaderOnly';
import { useState } from 'react';
import Button from '../components/Button';

const initalCredentials = {
  name: '',
  password: '',
};

export default function LoginPage({ onLogin }) {
  const [credentials, setCredentials] = useState(initalCredentials);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(credentials);
  }

  const disabled = credentials === initalCredentials;

  return (
    <>
      <header></header>
      <main>
        <Title>Login</Title>
        <Form
          aria-labelledby="form-name"
          autoComplete="off"
          labeltext="form"
          onSubmit={handleSubmit}
        >
          <Fieldset>
            <Part>
              <Label htmlFor="name">Your name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="enter your user name"
                min={0}
                onChange={handleOnChange}
                required
              />
            </Part>
            <Part>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="text"
                placeholder="enter your password"
                min={0}
                onChange={handleOnChange}
                required
              />
            </Part>
          </Fieldset>
          <ButtonToRight>
            <SubmitButton
              text="Login"
              isAccent={true}
              id="form-name"
              disabled={disabled}
            >
              <ScreenRaderOnly>Login</ScreenRaderOnly>
            </SubmitButton>
          </ButtonToRight>
        </Form>
        <SignUp>
          <p>You don't have a acocunt yet?</p>
          <LinkStyled to="/signup">
            <Button text="Sign up now" />
          </LinkStyled>
        </SignUp>
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

const Title = styled.h1`
  color: #687a48;
  font-size: 32px;
  width: 50%;
  margin: 0 0 20px;
`;

const Form = styled.form`
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 25px;
  border: 0.5px solid #a2c36c;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  margin-top: 20px;
  background-color: #fffcf8;
  color: #a2c36c;
  font-size: 1.5rem;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
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

const Label = styled.label`
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ff9c27;
  padding: 10px;
  border-radius: 5px;
  color: #aaa;
  background-color: white;
  font-size: 1.3rem;
`;

const ButtonToRight = styled.div`
  display: flex;
  justify-content: right;
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;

  p {
    margin: 0;
    color: #a2c36c;
  }
`;
