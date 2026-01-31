import type { DatePickerProps as AntDatePickerProps } from 'antd';

export interface DatepickerProps extends AntDatePickerProps {
  /**
   * Used by QA Team for automated testing.
   */
  'data-testid'?: string;
}
