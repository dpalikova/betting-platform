import "./Bonus.css";

export default function Offer({ bet, get }: { bet: number; get: number }) {
  return (
    <div className="bonusContainer">
      <p className="bHeading">Bonus</p>
      <div className="bonus">
        <p>Bet £{bet}</p>
        <p>Get £{get}</p>
      </div>
    </div>
  );
}
