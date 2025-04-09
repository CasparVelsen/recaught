import { HiPlus } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import DisplayDays from '../components/Days-Catches/DisplayDays';
import DisplayCatches from '../components/Days-Catches/DisplayCatches';
import DepthMap from '../images/DepthMap.svg';
import PageTitle from '../components/PageTitle';
import TimeFilter from '../components/stats/TimeFilter';
import WaterFilter from '../components/stats/WaterFilter';

export default function HomePage({
  profileCards,
  handleDelete,
  showModal,
  cancelDelete,
  confirmDelete,
  profile,
}) {
  const [showData, setShowData] = useState(true);
  const [active, setActive] = useState(true);

  function showPage() {
    setShowData(!showData);
    setActive(!active);
  }

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

  const filteredCatches = filteredCards.filter(data => data.catches !== undefined).map(data => data.catches);

  const catches = filteredCatches.flat();

  return (
    <>
      <header>
        <LinkStyled to="/formpage">
          <PlusIcon size={35} color="#FF9C27" />
        </LinkStyled>
      </header>
      <Main>
        <Map src={DepthMap} alt="DepthMap" />
        <TopBar>
          <PageTitle
            text={
              profile.firstname
                ? 'Tight lines, ' + profile.firstname
                : 'Tight lines, '
            }
          />
          <FilterWrapper>
            <TimeFilter profileCards={profileCards} handleChange={handleSelectSeason} handleSubmit={handleSubmitSeason}/>
            <WaterFilter filteredCardsByTime={filteredCardsByTime} handleChange={handleSelectWater} handleSubmit={handleSubmitWater} />
          </FilterWrapper>
        </TopBar>
        <Nav>
          <Page onClick={showPage} active={active}>
            Trips
          </Page>
          <Page onClick={showPage} active={!active}>
            Catches
          </Page>
        </Nav>
        <div>
          {showData && (
            <DisplayDays
            filteredCards={filteredCards}
              showModal={showModal}
              handleDelete={handleDelete}
              confirmDelete={confirmDelete}
              cancelDelete={cancelDelete}
            />
          )}
          {!showData && <DisplayCatches catches={catches} />}
        </div>
      </Main>
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

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #687a48;
  margin-top: 15px;
  height: 25px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fffcf8;
  height: 25px;
  width: 100%;
  border-radius: 20px;
  z-index: 2;

  ${({ active }) =>
    active &&
    css`
      background-color: #a2c36c;
      color: #fffcf8;
    `};
`;

const PlusIcon = styled(HiPlus)`
  position: absolute;
  right: 10px;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const Map = styled.img`
  position: fixed;
  top: 0px;
  right: 50px;
  height: 200px;
  z-index: -10;
`;

const Main = styled.div`
  margin: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
