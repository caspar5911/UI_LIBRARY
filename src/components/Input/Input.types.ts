import type { InputProps as AntInputProps } from 'antd';

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'search'
  | 'url'
  | 'tel';

export interface InputProps {
  /**
   * Used by QA Team for automated testing.
   */
  'data-testid'?: string;
  allowClear?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  showCount?: boolean;
  size?: AntInputProps['size'];
  status?: AntInputProps['status'];
  type?: InputType;
  variant?: AntInputProps['variant'];
}
