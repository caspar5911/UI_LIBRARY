import type { TimePickerProps as AntTimePickerProps } from "antd";

export interface TimepickerProps extends AntTimePickerProps {
  /**
   * Used by QA Team for automated testing.
   */
  "data-testid"?: string;
}
