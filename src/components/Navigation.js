import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Homepage</LinkStyled>
      <LinkStyled to="/formpage">FormPage</LinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: white;
  height: 48px;
  border: 1px solid black;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 100%;

  &.active {
    background: black;
    color: white;
  }
`;
