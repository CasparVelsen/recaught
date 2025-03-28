import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Stats from '../components/stats/Stats';
import Periods from '../components/stats/Periods';
import DepthMap from '../images/DepthMap.svg';
import PageTitle from '../components/PageTitle';

export default function ProfilePage({
  profile,
  token,
  logout,
  filteredCards,
  filteredCatches,
}) {

  console.log(filteredCards);

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
        <Map src={DepthMap} alt="DepthMap" />
        <PageTitle
          text={profile.firstname ? 'Hello, ' + profile.firstname : 'Hello, '}
        />
        <Stats
          filteredCards={filteredCards}
          filteredCatches={filteredCatches}
        />
        <Periods filteredCards={filteredCards} />
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

const Map = styled.img`
  position: fixed;
  top: 0;
  right: 50px;
  height: 200px;
  z-index: -100;
`;
