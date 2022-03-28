import { BsPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <header>
        Homepage
        <LinkStyled to="/formpage">
          <PlusIcon size={25} />
        </LinkStyled>
      </header>
      <main>
        <h1>Your entries:</h1>
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
