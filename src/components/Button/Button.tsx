import { Button as AntButton } from "antd";
import type { ButtonProps } from "./Button.types";
import "./Button.scss";

export const Button = ({
  intent = "primary",
  isRounded = false,
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => {
  const style = {
    borderRadius: isRounded ? 20 : 4,
    width: fullWidth ? "100%" : undefined,
  };

  return (
    <AntButton
      {...rest}
      icon={icon}
      className={`button button--${intent}`}
      style={style}
    />
  );
};

export default Button;
