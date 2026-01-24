import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Colorpicker from "./Colorpicker";
import type {
  ColorType,
  PresetColorType,
  Color,
  ColorpickerProps,
} from "./Colorpicker.types";

const meta: Meta<typeof Colorpicker> = {
  title: "Components/Colorpicker",
  component: Colorpicker,
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper for Ant Design ColorPicker. All documented props, events, and behaviors are demonstrated.",
      },
    },
  },
  argTypes: {
    value: { control: "text", description: "Controlled color value" },
    defaultValue: {
      control: "text",
      description: "Uncontrolled initial color",
    },
    allowClear: { control: "boolean" },
    arrow: { control: "boolean" },
    disabled: { control: "boolean" },
    disabledAlpha: { control: "boolean" },
    disabledFormat: { control: "boolean" },
    destroyOnHidden: { control: "boolean" },
    format: { control: "radio", options: ["hex", "rgb", "hsb"] },
    mode: { control: "radio", options: ["single", "gradient"] },
    open: { control: "boolean" },
    placement: {
      control: "radio",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
    },
    showText: { control: "boolean" },
    size: { control: "radio", options: ["large", "middle", "small"] },
    trigger: { control: "radio", options: ["hover", "click"] },
    presets: { control: false },
    panelRender: { control: false },
    styles: { control: false },
    classNames: { control: false },
    onChange: { action: "onChange" },
    onChangeComplete: { action: "onChangeComplete" },
    onFormatChange: { action: "onFormatChange" },
    onOpenChange: { action: "onOpenChange" },
    onClear: { action: "onClear" },
    rootClassName: { control: "text" },
    getPopupContainer: { control: false },
    autoAdjustOverflow: { control: "boolean" },
    destroyTooltipOnHide: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Colorpicker>;

export const DefaultSquare: Story = {
  args: {
    defaultValue: "#1677ff",
    // No children prop, so the default color square is used as the trigger
  },
};

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: "#1677ff",
    // children: "Allow Clear",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "#1677ff",
    // children: "Disabled",
  },
};

export const DisabledAlpha: Story = {
  args: {
    disabledAlpha: true,
    defaultValue: "rgba(22, 119, 255, 0.5)",
    // children: "Alpha Disabled",
  },
};

export const Format: Story = {
  args: {
    format: "rgb",
    defaultValue: "#1677ff",
    // children: "Format: RGB",
  },
};

export const Presets: Story = {
  args: {
    presets: [
      {
        label: "AntD",
        colors: ["#1677ff", "#f5222d", "#faad14", "#52c41a", "#eb2f96"],
      },
    ],
    defaultValue: "#1677ff",
    // children: "Presets",
  },
};

export const Gradient: Story = {
  args: {
    mode: "gradient",
    defaultValue: [
      { color: "rgb(16,142,233)", percent: 0 },
      { color: "rgb(135,208,104)", percent: 100 },
    ],
    // children: "Gradient",
  },
};

export const Placement: Story = {
  args: {
    placement: "topLeft",
    defaultValue: "#1677ff",
    // children: "Placement: Top Left",
  },
};

export const ShowText: Story = {
  args: {
    showText: true,
    defaultValue: "#1677ff",
    // children: "Show Text",
  },
};

export const CustomPanel: Story = {
  args: {
    defaultValue: "#1677ff",
    // children: "Custom Panel",
    panelRender: (panel: React.ReactNode) => (
      <div style={{ border: "2px dashed #1677ff", padding: 8 }}>
        <div>Custom Panel Wrapper</div>
        {panel}
      </div>
    ),
  },
};
