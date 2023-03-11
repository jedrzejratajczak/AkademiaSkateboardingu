import { Link } from 'react-router-dom';
import LogoBlack from '../assets/logo-black.png';
import NavLink from './NavLink';

const Navbar = () => (
  <div className="h-16 w-full bg-white flex items-center shadow justify-between px-5">
    <Link to="/">
      <img
        src={LogoBlack}
        alt="Logo firmy, litera A i S"
        className="w-12 h-12 md:w-16 md:h-16 p-1"
      />
    </Link>
    <div className="hidden md:flex gap-16 items-center justify-center">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/contact">KONTAKT</NavLink>
      <NavLink to="/media">O NAS</NavLink>
      <NavLink to="/map">MAPA</NavLink>
    </div>
    <div></div>
  </div>
);

export default Navbar;
