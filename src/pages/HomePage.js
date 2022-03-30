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
          <PlusIcon size={32} />
        </LinkStyled>
      </header>
      <main>
        <h1>Tight lines, Caspar</h1>
        <CardsList>
          {cards.map((data, index) => (
            <li key={index}>
              <Cards data={data} />
            </li>
          ))}
        </CardsList>
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

const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style: none;
  padding: 0;
  width: 100%;
`;
