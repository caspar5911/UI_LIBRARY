import { DatePicker } from "antd";
import clsx from "clsx";
import type { DatepickerProps } from "./Datepicker.types";
import "./Datepicker.scss";

const Datepicker = ({
  className,
  "data-testid": dataTestId,
  ...rest
}: DatepickerProps) => (
  <DatePicker
    {...rest}
    data-testid={dataTestId}
    className={clsx("my-datepicker", className)}
  />
);

export default Datepicker;
