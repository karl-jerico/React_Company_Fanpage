import { footerLinks } from "../assets/footerLinks";
import logo from "../assets/logo_hipe_black.png";

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="footer1__links-container">
        <div className="footer1__company">
          <img src={logo} alt="logo" className="company-logo" />
          <p className="company-name">
            HiPE 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer1__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer1__link">
              <h3 className="link-title">{item.title}</h3>
              <div className="link-item">
                {item.links.map((link) => (
                  <a key={link.title} href={link.url}>
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
