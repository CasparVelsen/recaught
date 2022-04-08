import { HiPlus } from 'react-icons/hi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Cards from '../components/Cards';

export default function HomePage({ cards, handleDelete }) {
  return (
    <>
      <header>
        <LinkStyled to="/formpage">
          <PlusIcon size={35} color="#FF9C27" />
        </LinkStyled>
      </header>
      <main>
        <Title>Tight lines, Caspar</Title>
        <CardsList>
          {cards
            ? cards.map((data, _id) => (
                <li key={_id}>
                  <Cards data={data} onDelete={handleDelete} />
                </li>
              ))
            : '...loading cards...'}
        </CardsList>
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

const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style: none;
  padding: 0;
  width: 100%;
`;
