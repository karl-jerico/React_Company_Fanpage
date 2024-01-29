import Walmart from "../assets/walmart.png";
import Adobe from "../assets/adobe.png";
import Microsoft from "../assets/microsoft.png";
import Facebook from "../assets/facebook.png";
import CustomButton from "../components/CustomButton";

import send from "../assets/send-alt-svgrepo-com (1).svg"

const ContactUs = () => {
  const handleClick = () => {};

  return (
    <section className="s-contact-us" id="clients">
      <div className="section">
        <h2 className="section__desc">Clients</h2>
        <p className="text-center text-md text-gray mt-8">
          We are proud to have partnered with leading companies in various
          industries. Here are some of our valued clients.
        </p>
      </div>
      <div className="clients">
        <img src={Walmart} alt="Client" className="clients__Img" />
        <img src={Adobe} alt="Client" className="clients__Img" />
        <img src={Microsoft} alt="Client" className="clients__Img" />
        <img src={Facebook} alt="Client" className="clients__Img" />
      </div>
      
      <div className="contact-us">
        <div className="contact-us__circle">
          <img src={send} alt="send" />
        </div>
        <h3 className="contact-us__desc">
          Subscribe to get information, latest news and other interesting offers
          about HiPE
        </h3>
        <div className="contact-us__form">
        <input type="text" placeholder="Type here" className="contact-us__input" />
          <CustomButton
            title="Subscribe"
            buttonStyle="rounded-xl bg-orange-gradient text-cream"
            handleClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
