// import { Link } from "react-router-dom";
import Logo from "../assets/logo_hipe_black.png";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="navbar">
        <a href="/" className="flex justify-center items-center">
          <img src={Logo} alt="logo" className="navbar__img" width={118} height={18} />
        </a>
        <ul className="navbar__list">
          <li className="navbar__item">Home</li>
          <li className="navbar__item">Leader</li>
          <li className="navbar__item">Teams</li>
          <li className="navbar__item">Best</li>
          <li className="navbar__item">Clients</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
