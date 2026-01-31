import { Select as AntSelect } from "antd";
import type { DropdownProps } from "./Dropdown.types";
import "./Dropdown.scss";

const OPTIONS = [
  { label: "Option A", value: "option-a" },
  { label: "Option B", value: "option-b" },
  { label: "Option C", value: "option-c" },
];

const Dropdown = ({
  "data-testid": dataTestId = "dd-dropdown",
  mode,
  ...rest
}: DropdownProps) => {
  const isMulti = mode === "multiple" || mode === "tags";
  const defaultValue = isMulti ? [] : OPTIONS[0].value;

  return (
    <AntSelect
      {...rest}
      mode={mode}
      className="ui-dropdown"
      data-testid={dataTestId}
      defaultValue={defaultValue}
      options={OPTIONS}
    />
  );
};

export default Dropdown;
