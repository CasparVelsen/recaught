import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Stats from '../components/stats/Stats';
import Periods from '../components/stats/Periods';
import DepthMap from '../images/DepthMap.svg';
import WeatherStats from '../components/stats/WeatherStats';

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
      <Main>
        <Map src={DepthMap} alt="DepthMap" />
        <Title>Hello, {profile.firstname}</Title>
        <Stats
          filteredCards={filteredCards}
          filteredCatches={filteredCatches}
        />
        <Periods filteredCards={filteredCards} />
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
  margin: 0;
`;

const Map = styled.img`
  position: absolute;
  top: 0;
  right: 50px;
  height: 200px;
  z-index: -100;
`;

const Main = styled.div`
  margin: 10px;
  padding-bottom: 68px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
