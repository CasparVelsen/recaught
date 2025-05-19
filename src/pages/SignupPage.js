import { HiArrowLeft } from 'react-icons/hi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import ScreenRaderOnly from '../components/ScreenRaderOnly';
import { useState } from 'react';
import DepthMap2 from '../images/DepthMap2.svg';
import PageTitle from '../components/PageTitle';

export default function SignUp({ onCreateUser }) {
  const [userData, setUserData] = useState();

  const handleOnChange = event => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    onCreateUser(userData);
  }

  return (
    <>
      <header>
        <LinkStyled to="/profile">
          <HiArrowLeft size={35} color="#FF9C27" />
        </LinkStyled>
      </header>
      <Main>
        <PageTitle text="SignUp" />
        <Form
          aria-labelledby="form-name"
          autoComplete="off"
          labeltext="form"
          onSubmit={handleSubmit}
        >
          <Fieldset>
            <Part>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="enter your first name"
                min={0}
                onChange={handleOnChange}
                required
              />
            </Part>
            <Part>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="enter your last name"
                min={0}
                onChange={handleOnChange}
                required
              />
            </Part>
            <Part>
              <Label htmlFor="username">User name</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="set your user name"
                min={5}
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
                placeholder="set your password"
                min={0}
                onChange={handleOnChange}
                required
              />
            </Part>
          </Fieldset>
          <ButtonToRight>
            <SubmitButton text="Create account" isAccent={true} id="form-name">
              <ScreenRaderOnly>SignUp</ScreenRaderOnly>
            </SubmitButton>
          </ButtonToRight>
        </Form>
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

const Form = styled.form`
  border-radius: 10px;
  padding: 10px;
  margin-top: 15px;
  padding-bottom: 25px;
  border: 0.5px solid #a2c36c;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  background-color: #fffcf8;
  color: #a2c36c;
  font-size: 1.5rem;
  z-index: 1;
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

const Map = styled.img`
  position: absolute;
  right: 0;
  bottom: 10px;
  height: 450px;
  z-index: 0;
`;

const Main = styled.div`
  margin: 10px;
  padding-bottom: 68px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
