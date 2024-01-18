import hero from '../assets/hero.png'

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__left">
        <h2 className="welcome__title">
            Best People around the world!
        </h2>
        <h1 className="welcome__desc">
            HiPE Diary
        </h1>
        <p className="welcome__subtitle">
          The most adorable company you can find in Eastwood
        </p>
        <button>Find out more</button>
      </div>
      <div className="welcome__img-container">
        <img src={hero} alt="hero" className='welcome__img'/>
        {/* <div className="welcome__image-overlay" /> */}
      </div>
    </section>
  );
};

export default Welcome;
