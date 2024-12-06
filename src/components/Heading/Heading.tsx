import "./Heading.css";

export default function Heading({ name }: { name: string }) {
  return <h2 className="heading">{name}</h2>;
}
