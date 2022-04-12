import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <>
      <header>
        <LinkStyled to="/login">
          <LoginButton>Login</LoginButton>
        </LinkStyled>
      </header>
      <main>
        <Title>Profile</Title>
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

const LoginButton = styled.button`
  position: absolute;
  right: 10px;
`;

const Title = styled.h1`
  color: #687a48;
  font-size: 32px;
  width: 50%;
  margin: 0 0 20px;
`;
