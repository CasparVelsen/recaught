import { NavLink } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import styled from 'styled-components';
import EntryForm from '../components/EntryForm';

export default function FormPage({ onCreateCard }) {
  return (
    <>
      <header>
        <LinkStyled to="/">
          <HiArrowLeft size={35} color="#FF9C27" />
        </LinkStyled>
      </header>
      <main>
        <Title>Create a new entry:</Title>
        <EntryForm onCreateCard={onCreateCard} />
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

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;
