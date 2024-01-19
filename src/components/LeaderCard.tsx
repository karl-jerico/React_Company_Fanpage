import { LeaderCardProps } from "../types";

const LeaderCard = ({ name, description, image }: LeaderCardProps) => {
  return (
    <div className="leader-card">
      <img
        src={image}
        alt={name}
        className="leader-card__image"
      />
      <h2 className="leader-card__name">{name}</h2>
      <p className="leader-card__description">{description}</p>
    </div>
  );
};

export default LeaderCard;
