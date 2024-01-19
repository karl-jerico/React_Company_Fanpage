import LeaderCard from "../components/LeaderCard";
import all_Leaders from "../assets/all_Leaders";

const Leaders = () => {
  const leaders = all_Leaders();

  return (
    <section className="s-leaders">
      <div className="section">
        <p className="section__title">LEADERS</p>
        <h2 className="section__desc">The Best Leads</h2>
      </div>
      <div className="leader">
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
