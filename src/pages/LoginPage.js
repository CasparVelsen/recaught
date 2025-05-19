import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import ScreenRaderOnly from '../components/ScreenRaderOnly';
import { useState } from 'react';
import Button from '../components/Button';
import DepthMap2 from '../images/DepthMap2.svg';
import PageTitle from '../components/PageTitle';

const initalCredentials = {
  username: '',
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
      <Main>
        <PageTitle text="Login" />
        <Subtitle>You have to login first to see your data</Subtitle>
        <Form
          aria-labelledby="form-name"
          autoComplete="off"
          labeltext="form"
          onSubmit={handleSubmit}
        >
          <Fieldset>
            <Part>
              <Label htmlFor="username">Your user name</Label>
              <Input
                id="udername"
                name="username"
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
        <Map src={DepthMap2} alt="DepthMap2" stroke="red" />
      </Main>
    </>
  );
}

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const Subtitle = styled.h3`
  color: #a2c36c;
  font-size: 18px;
  margin: 0;
  margin-top: 10px;
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

  &::placeholder {
    color: #aaa;
  }
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

const Main = styled.div`
  margin: 10px;
  padding-bottom: 68px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Map = styled.img`
  position: absolute;
  right: 0;
  bottom: 10px;
  height: 450px;
  z-index: -5;
`;
