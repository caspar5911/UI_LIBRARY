import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
    classNames: { control: false },
    styles: { control: false },
    onChange: { action: "changed" },
    onBlur: { action: "blurred" },
    onFocus: { action: "focused" },
    children: { control: "text" },
  },
  args: {
    children: "Checkbox",
    disabled: false,
    indeterminate: false,
  },
  parameters: {
    docs: {
      description: {
        component: `Ant Design-aligned Checkbox.\n\nProps: checked, defaultChecked, disabled, indeterminate, classNames, styles, onChange, onBlur, onFocus, children.`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    children: "Basic Checkbox",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Checkbox",
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    children: "Indeterminate Checkbox",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      >
        Controlled Checkbox ({checked ? "checked" : "unchecked"})
      </Checkbox>
    );
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultChecked: true,
    children: "Uncontrolled Checkbox (defaultChecked)",
  },
};

export const CustomClassNames: Story = {
  args: {
    classNames: {
      root: "storybook-custom-root",
      label: "storybook-custom-label",
    },
    children: "Custom classNames (see DOM)",
  },
};

export const CustomStyles: Story = {
  args: {
    styles: { root: { background: "#f0f0f0" }, label: { color: "#1677ff" } },
    children: "Custom styles (see DOM)",
  },
};

export const Accessibility: Story = {
  args: {
    "aria-label": "Accessible Checkbox",
    children: "Checkbox with aria-label",
  },
};
// End of stories
