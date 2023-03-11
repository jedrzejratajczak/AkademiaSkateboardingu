import { Link, useMatch } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const match = useMatch(to);

  return (
    <Link
      className={`text-xl tracking-wide
      ${
        match
          ? 'text-black underline'
          : 'hover:text-black hover:underline text-gray-600'
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
