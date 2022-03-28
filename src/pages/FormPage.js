import { NavLink } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function FormPage() {
  return (
    <>
      <header>
        <LinkStyled to="/">
          <BsFillArrowLeftCircleFill size={25} />
        </LinkStyled>
        Formpage
      </header>
      <main>
        <h1>Create a new entry:</h1>
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
