export type ButtonType = "primary" | "default" | "dashed" | "text" | "link";
export type ButtonVariant =
  | "solid"
  | "outlined"
  | "dashed"
  | "filled"
  | "text"
  | "link";
export type ButtonSize = "large" | "middle" | "small";

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  danger?: boolean;
  ghost?: boolean;
  block?: boolean;
  color?: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPlacement?: "start" | "end";
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  htmlType?: "button" | "submit" | "reset";
  autoInsertSpace?: boolean;
  shape?: "default" | "circle" | "round";
}
