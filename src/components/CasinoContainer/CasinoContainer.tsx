import "./CasinoContainer.css";
import ICasino from "../../types/ICasino";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { InfoHolder } from "../InfoHolder/InfoHolder";

export interface CasinoContainerProps {
  data: ICasino;
}

export const CasinoContainer = ({ data }: CasinoContainerProps) => {
  return (
    <div className="casino-container">
      <div className="first-row">
        <Logo logoUrl={data.logoUrl} alt={data.name} fill={data.logoBackgr} />
        <InfoHolder
          name={data.name}
          rating={data.rating}
          bet={data.bet}
          get={data.get}
        />
      </div>
      <Button label="Bet Now" primary size="medium" />
    </div>
  );
};
