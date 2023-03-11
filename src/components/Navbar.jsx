import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoBlack from '../assets/logo-black.png';
import NavLink from './NavLink';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen);
  };

  return (
    <>
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
        <div />
        <div className="relaive md:hidden z-50">
          <button className="p-2" onClick={toggleMobileMenu}>
            <div
              className={`transition-colors w-8 h-1 ${
                isMobileMenuOpen ? 'bg-white' : 'bg-black'
              } my-2 rounded`}
            ></div>
            <div
              className={`transition-colors w-8 h-1 ${
                isMobileMenuOpen ? 'bg-white' : 'bg-black'
              } my-2 rounded`}
            ></div>
            <div
              className={`transition-colors w-8 h-1 ${
                isMobileMenuOpen ? 'bg-white' : 'bg-black'
              } my-2 rounded`}
            ></div>
          </button>
        </div>
      </div>
      <div
        className={`fixed md:hidden transition-transform z-40 w-screen h-screen ${
          isMobileMenuOpen ? '' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 z-0 bg-black"></div>
        <div className="h-full z-10 relative flex flex-col items-center justify-center gap-8">
          <NavLink onClick={toggleMobileMenu} white to="/">
            HOME
          </NavLink>
          <NavLink onClick={toggleMobileMenu} white to="/contact">
            KONTAKT
          </NavLink>
          <NavLink onClick={toggleMobileMenu} white to="/media">
            O NAS
          </NavLink>
          <NavLink onClick={toggleMobileMenu} white to="/map">
            MAPA
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
