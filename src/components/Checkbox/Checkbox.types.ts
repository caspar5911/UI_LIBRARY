import type React from "react";

/**
 * Semantic DOM keys for AntD Checkbox
 */
export type CheckboxSemanticDOM = "root" | "icon" | "label";

/**
 * Custom classNames/styles for semantic DOM
 */
export type CheckboxClassNames = Partial<Record<CheckboxSemanticDOM, string>>;
export type CheckboxStyles = Partial<
  Record<CheckboxSemanticDOM, React.CSSProperties>
>;

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange"
> {
  /** Controlled checked state */
  checked?: boolean;
  /** Uncontrolled default checked state */
  defaultChecked?: boolean;
  /** Disable the checkbox */
  disabled?: boolean;
  /** Indeterminate visual state */
  indeterminate?: boolean;
  /** Custom class names for semantic DOM */
  classNames?:
    | CheckboxClassNames
    | ((info: { props: CheckboxProps }) => CheckboxClassNames);
  /** Custom styles for semantic DOM */
  styles?:
    | CheckboxStyles
    | ((info: { props: CheckboxProps }) => CheckboxStyles);
  /** Fires when checked state changes */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Fires on blur */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Fires on focus */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  /** Label content */
  children?: React.ReactNode;
}
