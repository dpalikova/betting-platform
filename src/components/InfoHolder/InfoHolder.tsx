import "./InfoHolder.css";
import { Heading } from "../Heading/Heading";
import { Bonus } from "../Bonus/Bonus";
import { Rating } from "../Rating/Rating";

export interface InfoHolderProps {
  name: string;
  rating: number;
  bet: number;
  get: number;
}

export const InfoHolder = ({ name, rating, bet, get }: InfoHolderProps) => {
  return (
    <div className="info-container">
      <div className="rating">
        <Heading name={name} underlined />
        <Rating rating={rating} />
      </div>
      <Bonus bet={bet} get={get} />
    </div>
  );
};
