import { Heading } from "../Heading/Heading";
import "./Bonus.css";

export interface BonusProps {
  bet: number;
  get: number;
}

export const Bonus = ({ bet, get }: BonusProps) => {
  return (
    <div className="bonus-container">
      <Heading name="Bonus" weight="heavy" />
      <div className="bonus">
        <p>Bet £{bet}</p>
        <p>Get £{get}</p>
      </div>
    </div>
  );
};
