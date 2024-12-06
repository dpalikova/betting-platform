import "./Button.css"

export default function Button({ txt }: { txt: string }) {
  return <button className="btn">{txt}</button>;
}
