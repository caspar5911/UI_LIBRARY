import { DatePicker as AntDatePicker } from "antd";
import type { DateTimepickerProps } from "./DateTimepicker.types";
import "./DateTimepicker.scss";

const DateTimepicker = ({
  "data-testid": dataTestId,
  allowClear,
  ...rest
}: DateTimepickerProps) => {
  return (
    <AntDatePicker
      {...rest}
      allowClear={allowClear}
      className="my-datetimepicker"
      data-testid={dataTestId}
      popupClassName="my-datetimepicker-popup--green"
      showTime
    />
  );
};

export default DateTimepicker;
