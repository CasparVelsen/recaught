import { NavLink } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import EntryForm from '../components/EntryForm';

export default function FormPage({ onCreateCard }) {
  return (
    <>
      <header>
        <LinkStyled to="/">
          <BsFillArrowLeftCircleFill size={32} />
        </LinkStyled>
        Formpage
      </header>
      <main>
        <h1>Create a new entry:</h1>
        <EntryForm onCreateCard={onCreateCard} />
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
