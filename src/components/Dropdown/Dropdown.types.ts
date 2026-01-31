import type { SelectProps } from 'antd';

export interface DropdownProps {
  /**
   * Used by QA Team for automated testing.
   */
  'data-testid'?: string;
  allowClear?: boolean;
  autoFocus?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  direction?: SelectProps['direction'];
  loading?: boolean;
  mode?: SelectProps['mode'];
  placement?: SelectProps['placement'];
  showSearch?: boolean;
  size?: SelectProps['size'];
  status?: SelectProps['status'];
  variant?: SelectProps['variant'];
  virtual?: SelectProps['virtual'];
}
