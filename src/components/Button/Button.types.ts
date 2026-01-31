// src/components/Button/Button.types.ts
import type { ButtonProps as AntdButtonProps } from 'antd';

export type ButtonIntent = 'primary' | 'secondary' | 'primary-inverse' | 'secondary-inverse';

export interface ButtonProps extends AntdButtonProps {

  /**
   * Used by QA Team for automated testing. This field auto-changes with button text, DO NOT modify unless required to.
   */
  "data-testid": string;

  /**
   * Design-system intent (NOT AntD type)
   */
  intent?: ButtonIntent;

  /**
   * Pill-style button
   */
  isRounded?: boolean;

  /**
   * Full-width button (AntD v5 replacement for `block`)
   */
  fullWidth?: boolean;

  /**
   * Position of the icon relative to the button label.
   */
  iconPlacement?: 'start' | 'end';

}
