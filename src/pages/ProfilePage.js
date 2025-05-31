import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import QuickStats from '../components/stats/QuickStats';
import Stats from '../components/stats/Stats';
import DepthMap from '../images/DepthMap.svg';
import PageTitle from '../components/PageTitle';
import TimeFilter from '../components/stats/TimeFilter';
import WaterFilter from '../components/stats/WaterFilter';
import { useState } from 'react';

export default function ProfilePage({ profile, token, logout, profileCards }) {
  const [season, setSeason] = useState('');
  const [water, setWater] = useState('');

  function handleSelectSeason(event) {
    setSeason(event.target.value);
    handleSubmitSeason(event);
  }

  function handleSubmitSeason(event) {
    event.preventDefault();
  }

  const filteredCardsByTime = (profileCards || []).filter(card =>
    card?.date?.includes(season)
  );

  function handleSelectWater(event) {
    setWater(event.target.value);
    handleSubmitWater(event);
  }

  function handleSubmitWater(event) {
    event.preventDefault();
  }

  const filteredCards = Array.isArray(filteredCardsByTime)
    ? filteredCardsByTime.filter(card => card?.water?.includes(water))
    : [];

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
        <TopBar>
          <PageTitle
            text={profile.firstname ? 'Hello, ' + profile.firstname : 'Hello, '}
          />
          <FilterWrapper>
            <TimeFilter
              profileCards={profileCards}
              handleChange={handleSelectSeason}
              handleSubmit={handleSubmitSeason}
            />
            <WaterFilter
              filteredCardsByTime={filteredCardsByTime}
              handleChange={handleSelectWater}
              handleSubmit={handleSubmitWater}
            />
          </FilterWrapper>
        </TopBar>
        <QuickStats filteredCards={filteredCards} />
        <Stats
          filteredCardsByTime={filteredCardsByTime}
          filteredCards={filteredCards}
          season={season}
          water={water}
        />
      </main>
    </>
  );
}

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const LogButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
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
  height: 250px;
  z-index: -100;
`;
