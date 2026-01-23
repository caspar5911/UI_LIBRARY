export type ButtonIntent = "primary" | "secondary";

export interface ButtonProps {
  children: React.ReactNode;
  intent?: ButtonIntent;
  size?: "small" | "middle" | "large";
  loading?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}
