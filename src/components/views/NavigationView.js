import { NavLink, Outlet } from 'react-router-dom';
import '../../index.css';

const NavigationView = ({ children }) => {
  return (
    <>
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navLink navLink--active' : 'navLink'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="redux"
          className={({ isActive }) =>
            isActive ? 'navLink navLink--active' : 'navLink'
          }
        >
          Vanilla Redux
        </NavLink>
        <NavLink
          to="toolkit"
          className={({ isActive }) =>
            isActive ? 'navLink navLink--active' : 'navLink'
          }
        >
          Redux toolkit
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export { NavigationView };
