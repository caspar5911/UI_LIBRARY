import type { DatePickerProps as AntDatePickerProps } from 'antd';

type AllowedAntProps = Pick<
  AntDatePickerProps,
  | 'autoFocus'
  | 'bordered'
  | 'disabled'
  | 'inputReadOnly'
  | 'placement'
  | 'picker'
  | 'showNow'
  | 'showToday'
  | 'size'
  | 'status'
>;

export interface DateTimepickerProps extends AllowedAntProps {
  /**
   * Used by QA Team for automated testing.
   */
  'data-testid'?: string;
  allowClear?: boolean;
}
