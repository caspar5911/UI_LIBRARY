import type { ReactNode, CSSProperties, FC } from "react";
// These types are not exported directly; use 'any' for now, or define minimal types for story controls.
export type ColorType = string | { color: string; percent: number }[];
export type PresetColorType = {
  label: ReactNode;
  colors: ColorType[];
  key?: string | number;
  defaultOpen?: boolean;
};
export type Color = any;

export interface ColorpickerProps {
  /** Allow clearing color selected */
  allowClear?: boolean;
  /** Configuration for popup arrow */
  arrow?: boolean | { pointAtCenter: boolean };
  /** Trigger of ColorPicker */
  children?: ReactNode;
  /** Customize class for each semantic structure inside the component */
  classNames?:
    | Record<string, string>
    | ((info: { props: any }) => Record<string, string>);
  /** Default value of color */
  defaultValue?: ColorType;
  /** Default format of color */
  defaultFormat?: "rgb" | "hex" | "hsb";
  /** Disable ColorPicker */
  disabled?: boolean;
  /** Disable Alpha */
  disabledAlpha?: boolean;
  /** Disable format of color */
  disabledFormat?: boolean;
  /** Whether destroy dom when close */
  destroyOnHidden?: boolean;
  /** Format of color */
  format?: "rgb" | "hex" | "hsb";
  /** Configure single or gradient color */
  mode?: "single" | "gradient" | Array<"single" | "gradient">;
  /** Whether to show popup */
  open?: boolean;
  /** Preset colors */
  presets?: PresetColorType[];
  /** Placement of popup */
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  /** Custom Render Panel */
  panelRender?: (
    panel: ReactNode,
    extra: { components: { Picker: FC; Presets: FC } },
  ) => ReactNode;
  /** Show color text */
  showText?: boolean | ((color: Color) => ReactNode);
  /** Setting the trigger size */
  size?: "large" | "middle" | "small";
  /** Customize inline style for each semantic structure inside the component */
  styles?:
    | Record<string, CSSProperties>
    | ((info: { props: any }) => Record<string, CSSProperties>);
  /** ColorPicker trigger mode */
  trigger?: "hover" | "click";
  /** Value of color */
  value?: ColorType;
  /** Callback when value is changed */
  onChange?: (value: Color, css: string) => void;
  /** Called when color pick ends */
  onChangeComplete?: (value: Color) => void;
  /** Callback when format is changed */
  onFormatChange?: (format?: "hex" | "rgb" | "hsb") => void;
  /** Callback when open is changed */
  onOpenChange?: (open: boolean) => void;
  /** Called when clear */
  onClear?: () => void;
  /** Custom root class name */
  rootClassName?: string;
  /** Popover container getter */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  /** Auto adjust overflow for popover */
  autoAdjustOverflow?: boolean;
  /** Destroy tooltip on hide */
  destroyTooltipOnHide?: boolean;
  /** Arbitrary data attributes */
  [key: `data-${string}`]: string | undefined;
}
