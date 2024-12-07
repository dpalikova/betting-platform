import "./Heading.css";

export interface HeadingProps {
  name: string;
  size?: "small" | "medium" | "large";
  underlined?: boolean;
  weight?: "light" | "heavy";
}

export const Heading = ({
  name,
  size = "medium",
  underlined = false,
  weight = "light",
}: HeadingProps) => {
  const underlinedClass = underlined ? "storybook-heading--underlined" : "";
  return (
    <h2
      className={[
        "storybook-heading",
        `storybook-heading--${size}`,
        `storybook-heading--${weight}`,
        underlinedClass,
      ].join(" ")}
    >
      {name}
    </h2>
  );
};
