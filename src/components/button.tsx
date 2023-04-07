import { ReactNode } from "react";

type ButtonColorType = "red" | "green" | "yellow";

type ButtonProps = {
  animate?: boolean;
  value?: string;
  icon?: ReactNode;
  color?: ButtonColorType;
  test?: string;
};

const Button = ({
  animate,
  value = "Click me",
  icon,
  color = "red",
  test,
}: ButtonProps) => {
  const colorSwitcher = (color: ButtonColorType) => {
    switch (color) {
      case "red":
        return "btn--red";
    }
  };
  return (
    <button className={`btn ${animate ? "btn--animate" : ""}`}>
      {icon}
      <span>{value}</span>
      {test ? "" : ""}
    </button>
  );
};

export default Button;
