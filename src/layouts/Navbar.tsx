import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/logo_hipe_black.png";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import CustomButton from "../components/CustomButton";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      }

      if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="l-header">
      <nav className={`l-header__navbar ${scrolling ? "bg-blur" : ""}`}>
        <a
          href="/"
          className="flex justify-center items-center"
          onClick={() => scroll.scrollToTop()}
        >
          <img
            src={Logo}
            alt="logo"
            className="l-header__navbar__img"
            width={118}
            height={18}
          />
        </a>
        <div className="l-header__navbar__list">
          <Link
            to="welcome"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="l-header__navbar__item"
          >
            Home
          </Link>
          <Link
            to="leaders"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="l-header__navbar__item"
          >
            Leader
          </Link>
          <Link
            to="teams"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="l-header__navbar__item"
          >
            Teams
          </Link>
          <Link
            to="best"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="l-header__navbar__item"
          >
            Best
          </Link>
          <Link
            to="clients"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="l-header__navbar__item"
          >
            Clients
          </Link>
        </div>
        <HiMenuAlt3 className="hamburger" onClick={toggleSidebar} />
      </nav>

      {sidebarOpen && (
        <div className="l-header__sidebar " onClick={closeSidebar}>
          <div className="l-header__sidebar__container">
            <div className="l-header__sidebar__container__header">
              <img
                src={Logo}
                alt="logo"
                className="l-header__sidebar__container__header__img"
                width={118}
                height={18}
              />
              <RxCross1
                onClick={closeSidebar}
                className="l-header__sidebar__container__header__cross"
              />
            </div>
            <div className="l-header__sidebar__container__items">
              <Link
                className="l-header__sidebar__container__items__link"
                to="welcome"
                smooth={true}
                duration={500}
                onClick={closeSidebar}
              >
                Home
              </Link>
              <Link
                className="l-header__sidebar__container__items__link"
                to="leaders"
                smooth={true}
                duration={500}
                onClick={closeSidebar}
              >
                Leader
              </Link>
              <Link
                className="l-header__sidebar__container__items__link"
                to="teams"
                smooth={true}
                duration={500}
                onClick={closeSidebar}
              >
                Teams
              </Link>
              <Link
                className="l-header__sidebar__container__items__link"
                to="best"
                smooth={true}
                duration={500}
                onClick={closeSidebar}
              >
                Best
              </Link>
              <Link
                className="l-header__sidebar__container__items__link"
                to="clients"
                smooth={true}
                duration={500}
                onClick={closeSidebar}
              >
                Clients
              </Link>
              <CustomButton
                title="Find out more"
                buttonStyle="rounded-full bg-yellow-gradient text-cream mt-10"
                handleClick={toggleSidebar}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
