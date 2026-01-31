import { TimePicker } from "antd";
import clsx from "clsx";
import type { TimepickerProps } from "./Timepicker.types";
import "./Timepicker.scss";

const Timepicker = ({ className, "data-testid": dataTestId, ...rest }: TimepickerProps) => (
  <TimePicker
    {...rest}
    data-testid={dataTestId}
    className={clsx("my-timepicker", className)}
  />
);

export default Timepicker;
