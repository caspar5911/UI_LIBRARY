import { Button as AntButton } from "antd";
import type { ButtonProps } from "./Button.types";
import "./Button.scss";

export const Button = ({
  type = "default",
  danger = false,
  ghost = false,
  block = false,
  color,
  variant,
  icon,
  iconPlacement = "start",
  size = "middle",
  loading = false,
  disabled = false,
  isRounded = false,
  fullWidth = false,
  style,
  href,
  target,
  htmlType = "button",
  autoInsertSpace = true,
  shape = "default",
  children,
  ...rest
}: ButtonProps) => {
  // Compose style for custom/gradient backgrounds and rounded
  const mergedStyle = {
    borderRadius: isRounded ? 20 : 4,
    width: fullWidth ? "100%" : undefined,
    ...style,
  };

  // Icon placement logic
  let iconNode = icon;
  let content = children;
  if (icon && iconPlacement === "end") {
    content = (
      <span>
        {children} {icon}
      </span>
    );
    iconNode = undefined;
  }

  return (
    <AntButton
      type={type}
      danger={danger}
      ghost={ghost}
      block={block || fullWidth}
      icon={iconNode}
      size={size}
      loading={loading}
      disabled={disabled}
      style={mergedStyle}
      href={href}
      target={target}
      htmlType={htmlType}
      autoInsertSpace={autoInsertSpace}
      shape={shape}
      // color/variant are not native to AntD Button, but can be handled via style or className if needed
      {...rest}
    >
      {content}
    </AntButton>
  );
};

export default Button;
