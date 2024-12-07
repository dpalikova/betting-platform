import "./Logo.css";

export interface LogoProps {
  logoUrl: string;
  alt: string;
  fill?: string;
}

export const Logo = ({ logoUrl, alt, fill }: LogoProps) => {
  return (
    <div style={{ backgroundColor: fill }} className="storybook-logo">
      <img src={logoUrl} alt={alt} />
    </div>
  );
};
