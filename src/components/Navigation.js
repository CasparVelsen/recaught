import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/formpage">FormPage</NavLink>
    </nav>
  );
}
