import React, { useRef, useEffect } from "react";
import type {
  CheckboxProps,
  CheckboxClassNames,
  CheckboxStyles,
} from "./Checkbox.types";
import "./Checkbox.scss";

/**
 * Ant Design-aligned Checkbox component
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      disabled = false,
      indeterminate = false,
      classNames,
      styles,
      onChange,
      onBlur,
      onFocus,
      children,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    // Allow ref forwarding
    useEffect(() => {
      if (typeof ref === "function") ref(inputRef.current!);
      else if (ref)
        (ref as React.MutableRefObject<HTMLInputElement | null>).current =
          inputRef.current;
    }, [ref]);

    // Semantic DOM helpers
    const getClass = (key: keyof CheckboxClassNames) => {
      if (typeof classNames === "function")
        return (
          classNames({
            props: {
              checked,
              defaultChecked,
              disabled,
              indeterminate,
              classNames,
              styles,
              onChange,
              onBlur,
              onFocus,
              children,
              ...rest,
            },
          })[key] || ""
        );
      return classNames?.[key] || "";
    };
    const getStyle = (key: keyof CheckboxStyles) => {
      if (typeof styles === "function")
        return (
          styles({
            props: {
              checked,
              defaultChecked,
              disabled,
              indeterminate,
              classNames,
              styles,
              onChange,
              onBlur,
              onFocus,
              children,
              ...rest,
            },
          })[key] || undefined
        );
      return styles?.[key] || undefined;
    };

    // Indeterminate state
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    return (
      <span
        className={["ant-checkbox-wrapper", getClass("root")]
          .filter(Boolean)
          .join(" ")}
        style={getStyle("root")}
      >
        <input
          ref={inputRef}
          type="checkbox"
          className={["ant-checkbox-input", getClass("icon")]
            .filter(Boolean)
            .join(" ")}
          style={getStyle("icon")}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          aria-checked={indeterminate ? "mixed" : checked}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          {...rest}
        />
        <span
          className={["ant-checkbox-label", getClass("label")]
            .filter(Boolean)
            .join(" ")}
          style={getStyle("label")}
        >
          {children}
        </span>
      </span>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
