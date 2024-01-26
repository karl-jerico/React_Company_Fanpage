import Best from "../sections/Best";
import ContactUs from "../sections/ContactUs";
import Leaders from "../sections/Leaders";
import Members from "../sections/Members";
import Teams from "../sections/Teams";
import Welcome from "../sections/Welcome";

const Home = () => {
  return (
    <div className="p-home">
      <Welcome />
      <Leaders />
      <Teams />
      <Best />
      <Members />
      <ContactUs />
    </div>
  );
};

export default Home;
