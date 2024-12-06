import "./CasinoContainer.css";
import ICasino from "../../types/ICasino";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import InfoHolder from "../InfoHolder/InfoHolder";

export default function CasinoContainer({ data }: { data: ICasino }) {
  return (
    <div className="casinoContainer">
      <div className="firstRow">
        <Logo logoUrl={data.logoUrl} alt={data.name} fill={data.logoBackgr} />
        <InfoHolder
          name={data.name}
          rating={data.rating}
          bet={data.bet}
          get={data.get}
        />
      </div>
      <Button txt="Bet Now" />
    </div>
  );
}
