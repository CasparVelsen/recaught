import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Profile from '../components/Profile';

export default function ProfilePage({
  profile,
  token,
  logout,
  filteredCards,
  filteredCatches,
}) {
  return (
    <>
      <header>
        {token ? (
          <LogButton onClick={logout}>Logout</LogButton>
        ) : (
          <LinkStyled to="/login">
            <LogButton>Login</LogButton>
          </LinkStyled>
        )}
      </header>
      <main>
        <Title>Hello, {profile.firstname}</Title>
        <Profile
          filteredCards={filteredCards}
          filteredCatches={filteredCatches}
        />
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

const LogButton = styled.button`
  position: absolute;
  right: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #687a48;
`;

const Title = styled.h1`
  color: #687a48;
  font-size: 32px;
  width: 50%;
  margin: 0 0 20px;
`;
