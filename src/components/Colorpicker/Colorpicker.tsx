import { ColorPicker as AntColorPicker } from "antd";
import type { ColorpickerProps } from "./Colorpicker.types";
import "./Colorpicker.scss";

/**
 * Colorpicker wraps Ant Design's ColorPicker, exposing all documented props and events.
 */
export const Colorpicker = (props: ColorpickerProps) => {
  return <AntColorPicker {...props} />;
};

export default Colorpicker;
