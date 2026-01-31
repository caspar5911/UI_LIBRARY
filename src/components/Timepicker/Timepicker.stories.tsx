import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import type { ComponentProps } from "react";
import { useEffect, useMemo, useRef } from "react";
import Timepicker from "./Timepicker";
import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

type TimepickerStoryArgs = ComponentProps<typeof Timepicker> & {
  status?: "unset" | "error" | "warning";
};

type Story = StoryObj<TimepickerStoryArgs>;

const meta = {
  title: "Components/Timepicker",
  component: Timepicker,
  parameters: {
    docs: {
      description: {
        component:
          "Timepicker wraps Ant Design's TimePicker to provide a consistent API and QA test hooks while keeping AntD behavior intact.",
      },
      primaryStory: "WithTitle",
      page: () => (
        <>
          <Title />
          <Subtitle>Select a time using Ant Design’s TimePicker wrapper.</Subtitle>
          <Description />

          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Props</h2>
          <Controls />
          <p>For other properties, see Ant Design's documentation for TimePicker.</p>

          <h2>Usage guidelines</h2>
          <h3>When to use</h3>
          <ul>
            <li>Scheduling a specific time (meetings, reminders, deadlines).</li>
            <li>Collecting time inputs in forms or filters.</li>
            <li>When a clock-based selector is faster than typing.</li>
          </ul>

          <h3>When not to use</h3>
          <ul>
            <li>Choosing a time range (use RangePicker).</li>
            <li>Entering approximate or free-form time.</li>
            <li>Selecting multiple discrete times.</li>
          </ul>

          <h2>Variants</h2>
          <h3>With title</h3>
          <p>Use when the field needs an explicit label above the control.</p>

          <h3>Without title</h3>
          <p>Use when the label is provided by surrounding UI or layout context.</p>

          <h2>Design checklist</h2>
          <ul>
            <li>Label style matches nearby form fields.</li>
            <li>Input size aligns with adjacent controls.</li>
            <li>Popover placement avoids obscuring important content.</li>
          </ul>

          <h2>Accessibility</h2>
          <ul>
            <li>Ensure the label is programmatically associated when present.</li>
            <li>Keyboard users can open the panel and select a time.</li>
            <li>Validation states are announced clearly.</li>
          </ul>

          <h2>Examples</h2>
          <Stories />
        </>
      ),
    },
  },
  args: {
    disabled: false,
    autoFocus: false,
    placement: "bottomLeft",
    size: "middle",
    status: undefined,
    variant: "outlined",
    allowClear: true,
    bordered: true,
    inputReadOnly: false,
    use12Hours: false,
    showNow: true,
    popupClassName: "my-timepicker-popup--green",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the input and prevents opening the picker.",
      table: { category: "Common Antd Props", defaultValue: { summary: "false" } },
    },
    autoFocus: {
      control: "boolean",
      description: "Focuses the input when the component mounts.",
      table: { category: "Common Antd Props", defaultValue: { summary: "false" } },
    },
    allowClear: {
      control: "boolean",
      description: "Shows a clear icon to reset the value.",
      table: { category: "Common Antd Props", defaultValue: { summary: "true" } },
    },
    bordered: {
      control: "boolean",
      description: "Toggles the input border.",
      table: { category: "Common Antd Props", defaultValue: { summary: "true" } },
    },
    inputReadOnly: {
      control: "boolean",
      description: "Prevents manual typing while still allowing selection.",
      table: { category: "Common Antd Props", defaultValue: { summary: "false" } },
    },
    use12Hours: {
      control: "boolean",
      description: "Switches to 12-hour format with AM/PM.",
      table: { category: "Common Antd Props", defaultValue: { summary: "false" } },
    },
    showNow: {
      control: "boolean",
      description: "Shows the “Now” quick action in the panel.",
      table: { category: "Common Antd Props", defaultValue: { summary: "true" } },
    },
    placement: {
      control: "select",
      description: "Positions the dropdown relative to the input.",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
      table: { category: "Common Antd Props", defaultValue: { summary: "bottomLeft" } },
    },
    size: {
      control: "select",
      description: "Sets the input size.",
      options: ["small", "middle", "large"],
      table: { category: "Common Antd Props", defaultValue: { summary: "middle" } },
    },
    status: {
      control: "select",
      description: "Applies validation status styling.",
      options: ["unset", "error", "warning"],
      mapping: { unset: undefined },
      table: { category: "Common Antd Props", defaultValue: { summary: "unset" } },
    },
    variant: {
      control: "select",
      description: "Controls the visual style of the input.",
      options: ["outlined", "filled", "borderless"],
      table: { category: "Common Antd Props", defaultValue: { summary: "outlined" } },
    },
    popupClassName: {
      control: "select",
      description: "Applies a class to the time picker popup panel.",
      options: ["none", "green"],
      mapping: { none: undefined, green: "my-timepicker-popup--green" },
      table: { category: "Common Antd Props", defaultValue: { summary: "none" } },
    },
    "data-testid": {
      description: "QA selector used for automated testing.",
      control: "text",
      table: { category: "QA Testing", defaultValue: { summary: "" } },
    },
    classNames: { table: { disable: true } },
    styles: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
    onOk: { table: { disable: true } },
    onSelect: { table: { disable: true } },
    locale: { table: { disable: true } },
    dropdownClassName: { table: { disable: true } },
    popupStyle: { table: { disable: true } },
    format: { table: { disable: true } },
    hourStep: { table: { disable: true } },
    minuteStep: { table: { disable: true } },
    secondStep: { table: { disable: true } },
    hideDisabledOptions: { table: { disable: true } },
  },
} satisfies Meta<TimepickerStoryArgs>;

export default meta;

function toTestId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");
  return `timepicker-${slug || "timepicker"}`;
}

const useAutoTestId = (label: string) => {
  const [args, updateArgs] = useArgs();
  const nextAuto = useMemo(() => toTestId(label), [label]);
  const lastAuto = useRef<string | null>(null);
  useEffect(() => {
    const current = (args as any)["data-testid"];
    if (!current || current === lastAuto.current) {
      lastAuto.current = nextAuto;
      updateArgs({ "data-testid": nextAuto } as any);
    }
  }, [nextAuto, updateArgs, args]);
};

const withTitle = (args: TimepickerStoryArgs) => (
  <div className="my-timepicker-wrapper">
    <span className="my-timepicker-wrapper__title">Title</span>
    <Timepicker {...args} />
  </div>
);

export const WithTitle: Story = {
  render: (args) => {
    useAutoTestId("Title Timepicker");
    return withTitle(args);
  },
};

export const WithTitleFocused: Story = {
  args: {
    autoFocus: true,
  },
  parameters: {
    docs: { disable: true },
  },
  render: (args) => {
    useAutoTestId("Title Timepicker");
    return withTitle(args);
  },
};

export const WithTitleDisabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    useAutoTestId("Title Timepicker");
    return withTitle(args);
  },
};

export const WithoutTitle: Story = {
  render: (args) => {
    useAutoTestId("Timepicker");
    return <Timepicker {...args} />;
  },
};

export const WithoutTitleFocused: Story = {
  args: {
    autoFocus: true,
  },
  parameters: {
    docs: { disable: true },
  },
  render: (args) => {
    useAutoTestId("Timepicker");
    return <Timepicker {...args} />;
  },
};

export const WithoutTitleDisabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    useAutoTestId("Timepicker");
    return <Timepicker {...args} />;
  },
};
