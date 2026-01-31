// src/components/Button/Button.tsx
import { Button as AntdButton } from 'antd';
import clsx from 'clsx';
import './Button.scss';
import type { ButtonProps } from './Button.types';

const Button = ({
  intent = 'primary',
  isRounded = false,
  fullWidth = false,
  className,
  style,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <AntdButton
      {...rest}
      className={clsx(
        'my-button',
        `my-button--${intent}`,
        className
      )}
      style={{
        borderRadius: isRounded ? 20 : 4,
        width: fullWidth ? '100%' : undefined,
        ...style,
      }}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
