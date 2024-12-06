import casinos from "../assets/data/casinos";
import CasinoContainer from "../components/CasinoContainer/CasinoContainer";
import "./Casinos.css";

export default function Casinos() {
  return (
    <div className="container">
      <h1 className="pageHeading">Best Casinos 2024</h1>
      <ul className="casinosContainer">
        {casinos.map((casino) => (
          <li key={casino.id}>
            <CasinoContainer data={casino} />
          </li>
        ))}
      </ul>
    </div>
  );
}
