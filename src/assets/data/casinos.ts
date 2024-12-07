import ICasino from "../../types/ICasino";

const casinos: ICasino[] = [
  {
    id: 1,
    name: "Grosvenor Casinos",
    logoUrl: "/img/Logo_Grosvenor.png",
    logoBackgr: "#03252B",
    rating: 4,
    bet: 10,
    get: 200,
  },
  {
    id: 2,
    name: "Happy Spins",
    logoUrl: "/img/Logo_Happy Spins.png",
    logoBackgr: "#43082F",
    rating: 5,
    bet: 15,
    get: 300,
  },
  {
    id: 3,
    name: "Hajper",
    logoUrl: "/img/Logo_Hajper.png",
    logoBackgr: "#123156",
    rating: 3,
    bet: 20,
    get: 400,
  },
];

export default casinos;
