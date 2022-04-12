import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const initalProfile = {
  _id: '',
  name: '',
};

export default function ProfilePage({ token }) {
  const [profile, setProfile] = useState(initalProfile);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch('/api/users/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(setProfile);
  }, [token]);

  return (
    <>
      <header>
        <LinkStyled to="/login">
          <LoginButton>Login</LoginButton>
        </LinkStyled>
      </header>
      <main>
        <Title>Hello {profile.name}</Title>
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
