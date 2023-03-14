import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
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
            className="w-16 h-16 p-2"
          />
        </Link>
        <div className="hidden lg:flex gap-16 items-center justify-center">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/kontakt">KONTAKT</NavLink>
          <NavLink to="/cennik">CENNIK</NavLink>
          <NavLink to="/o_nas">O NAS</NavLink>
          <NavLink to="/galeria">GALERIA</NavLink>
          <NavLink to="/mapa">MAPA</NavLink>
        </div>
        <div className="block lg:hidden" />
        <div className="hidden lg:flex gap-3">
          <SocialIcon
            className="scale-75"
            url="https://www.facebook.com/SkateAcademy.Wro/"
          />
          <SocialIcon
            bgColor="#E8424E"
            className="scale-75"
            url="https://www.instagram.com/akademiaskateboardingu"
          />
        </div>
        <div className="relaive lg:hidden z-50">
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
        className={`fixed lg:hidden transition-transform z-40 w-screen h-screen ${
          isMobileMenuOpen ? '' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 z-0 bg-black"></div>
        <div className="h-full z-10 relative flex flex-col items-center justify-center gap-8">
          <NavLink onClick={toggleMobileMenu} white to="/">
            HOME
          </NavLink>
          <NavLink onClick={toggleMobileMenu} white to="/kontakt">
            KONTAKT
          </NavLink>
          <NavLink onClick={toggleMobileMenu} white to="/cennik">
            CENNIK
          </NavLink>
          <NavLink onClick={toggleMobileMenu} white to="/o_nas">
            O NAS
          </NavLink>
          <NavLink onClick={toggleMobileMenu} white to="/galeria">
            GALERIA
          </NavLink>
          <NavLink onClick={toggleMobileMenu} white to="/mapa">
            MAPA
          </NavLink>
          <div className="relative z-10 flex gap-3">
            <SocialIcon
              className="scale-75"
              url="https://www.facebook.com/SkateAcademy.Wro/"
            />
            <SocialIcon
              bgColor="#E8424E"
              className="scale-75"
              url="https://www.instagram.com/akademiaskateboardingu"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
