import LeaderCard from "../components/LeaderCard";
import all_Leaders from "../assets/all_Leaders";

import spiral_bg from "../assets/spiral.png"

const Leaders = () => {
  const leaders = all_Leaders();

  return (
    <section className="s-leaders" id="leaders">
      <img src={spiral_bg} alt="spiral_bg" className="s-leaders__bg"/>
      <div className="section">
        <p className="section__title">LEADERS</p>
        <h2 className="section__desc">The Best Leads</h2>
      </div>
      <div className="s-leaders__leader">
        {leaders.map((leader) => (
          <LeaderCard
            key={leader.id}
            id={leader.id}
            name={leader.name}
            description={leader.description}
            image={leader.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Leaders;
