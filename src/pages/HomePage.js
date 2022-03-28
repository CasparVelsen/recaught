import { BsPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Cards from '../components/Cards';

export default function HomePage({ cards }) {
  console.log(cards);
  return (
    <>
      <header>
        Homepage
        <LinkStyled to="/formpage">
          <PlusIcon size={25} />
        </LinkStyled>
      </header>
      <main>
        <h1>Tight lines, Caspar</h1>
        {cards.map(({ date, time, water, targetSpecies, id }) => (
          <Cards
            date={date}
            time={time}
            water={water}
            targetSpecies={targetSpecies}
            key={id}
          />
        ))}
      </main>
    </>
  );
}

const PlusIcon = styled(BsPlusCircleFill)`
  position: absolute;
  right: 10px;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;
