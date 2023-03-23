import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/">Log In</NavLink>
    </nav>
  );
};