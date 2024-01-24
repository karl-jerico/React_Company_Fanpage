import hero from "../assets/hero.png";
import CustomButton from "../components/CustomButton";

const Welcome = () => {
  const handleScroll = () => {};

  return (
    
    <section className="welcome">
      <div className="welcome__left">
        <h2 className="welcome__title">Best People around the world!</h2>
        <h1 className="welcome__desc">HiPE Diary</h1>
        <p className="welcome__subtitle">
          The most adorable company you can find in Eastwood
        </p>
        <CustomButton
          title="Find out more"
          buttonStyle="rounded-full bg-yellow-gradient text-cream mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="welcome__img-container">
        <img src={hero} alt="hero" className="welcome__img" />
        {/* <div className="welcome__image-overlay" /> */}
      </div>
    </section>
  );
};

export default Welcome;
