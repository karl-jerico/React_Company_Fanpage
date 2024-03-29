import all_teams from "../assets/all_teams";
import { TeamProps } from "../types";


const Teams = () => {
    const teams: TeamProps [] = all_teams()
  return (
    <section className="s-teams" id="teams">
      <div className="section">
        <p className="section__title">TEAMS</p>
        <h2 className="section__desc">Group with the Greatest mind</h2>
      </div>
      <div className="teams">
        <div className="team">
          {teams.map((team) => (
            <div key={team.id} className="carousel-item h-full">
              <img src={team.image} alt={team.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
