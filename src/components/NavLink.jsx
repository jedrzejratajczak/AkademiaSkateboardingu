import { Link, useMatch } from 'react-router-dom';

const NavLink = ({ to, children, white = false, onClick }) => {
  const match = useMatch(to);

  return white ? (
    <Link
      className={`text-xl tracking-wide
      ${
        match
          ? 'text-white underline'
          : 'hover:text-white hover:underline text-gray-600'
      }`}
      onClick={onClick}
      to={to}
    >
      {children}
    </Link>
  ) : (
    <Link
      className={`text-[18px] tracking-wide
      ${
        match
          ? 'text-black underline'
          : 'hover:text-black hover:underline text-gray-600'
      }`}
      onClick={onClick}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
