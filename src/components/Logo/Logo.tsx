import "./Logo.css";

export default function Logo({
  logoUrl,
  alt,
  fill,
}: {
  logoUrl: string;
  alt: string;
  fill: string;
}) {
  return (
    <div style={{ backgroundColor: fill }} className="logo">
      <img src={logoUrl} alt={alt} />
    </div>
  );
}
