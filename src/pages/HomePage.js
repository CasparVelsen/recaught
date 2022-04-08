import { HiPlus } from 'react-icons/hi';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import DisplayDays from '../components/Days-Catches/DisplayDays';
import DisplayCatches from '../components/Days-Catches/DisplayCatches';
import { useState } from 'react';

export default function HomePage({ cards, handleDelete }) {
  const [showData, setShowData] = useState(true);
  const [active, setActive] = useState(true);

  function showPage() {
    setShowData(!showData);
    setActive(!active);
  }

  return (
    <>
      <header>
        <LinkStyled to="/formpage">
          <PlusIcon size={35} color="#FF9C27" />
        </LinkStyled>
      </header>
      <main>
        <Title>Tight lines, Caspar</Title>
        <Nav>
          <Page onClick={showPage} active={active}>
            Days
          </Page>
          <Page onClick={showPage} active={!active}>
            Catches
          </Page>
        </Nav>
        <div>
          {showData && (
            <DisplayDays cards={cards} handleDelete={handleDelete} />
          )}
          {!showData && <DisplayCatches />}
        </div>
      </main>
    </>
  );
}

const Title = styled.h1`
  color: #687a48;
  font-size: 32px;
  width: 50%;
  margin: 0 0 20px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #687a48;
  height: 30px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  height: 30px;
  width: 100%;
  border-radius: 20px;

  ${({ active }) =>
    active &&
    css`
      background-color: #ff9c27;
    `}
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
