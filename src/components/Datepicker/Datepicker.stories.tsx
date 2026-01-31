import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import type { ComponentProps } from "react";
import { useEffect, useMemo, useRef } from "react";
import Datepicker from "./Datepicker";
import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

type Story = StoryObj<typeof Datepicker>;

const meta = {
  title: "Components/Datepicker",
  component: Datepicker,
  parameters: {
    docs: {
      description: {
        component:
          "Datepicker wraps Ant Design's DatePicker to provide a consistent API and QA test hooks while keeping AntD behavior intact.",
      },
      primaryStory: "WithTitle",
      page: () => (
        <>
          <Title />
          <Subtitle>
            Select a single date with optional label variants.
          </Subtitle>
          <Description />

          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Props</h2>
          <Controls />
          <p>
            For other properties, see Ant Design's documentation for DatePicker.
          </p>

          <h2>Usage guidelines</h2>
          <h3>When to use</h3>
          <ul>
            <li>Picking a single date in forms and filters.</li>
            <li>When a labeled field helps clarify intent.</li>
            <li>When the user needs a calendar view to select a date.</li>
          </ul>

          <h3>When not to use</h3>
          <ul>
            <li>Choosing a date range (use RangePicker).</li>
            <li>Entering a free-form or approximate date.</li>
            <li>Selecting multiple discrete dates.</li>
          </ul>

          <h2>Variants</h2>
          <h3>With title</h3>
          <p>Use when the input needs a visible label above the control.</p>

          <h3>Without title</h3>
          <p>Use when the label is provided by surrounding UI.</p>

          <h2>Design checklist</h2>
          <ul>
            <li>Label uses consistent typography and spacing.</li>
            <li>Input size matches adjacent fields.</li>
            <li>Calendar placement does not obscure critical content.</li>
          </ul>

          <h2>Accessibility</h2>
          <ul>
            <li>Ensure labels are programmatically associated when needed.</li>
            <li>Keyboard users can open, navigate, and select dates.</li>
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
    picker: "date",
    placement: "bottomLeft",
    size: "middle",
    status: undefined,
    variant: "outlined",
    allowClear: true,
    bordered: true,
    inputReadOnly: false,
    showToday: true,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the input and prevents opening the picker.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    autoFocus: {
      control: "boolean",
      description: "Focuses the input when the component mounts.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    allowClear: {
      control: "boolean",
      description: "Shows a clear icon to reset the value.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "true" },
      },
    },
    bordered: {
      control: "boolean",
      description: "Toggles the input border.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "true" },
      },
    },
    inputReadOnly: {
      control: "boolean",
      description: "Prevents manual typing while still allowing selection.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    showToday: {
      control: "boolean",
      description: "Shows the “Today” quick action in the footer.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "true" },
      },
    },
    picker: {
      control: "select",
      description: "Selects the panel type (date, week, month, quarter, year).",
      options: ["date", "week", "month", "quarter", "year"],
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "date" },
      },
    },
    placement: {
      control: "select",
      description: "Positions the dropdown relative to the input.",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "bottomLeft" },
      },
    },
    size: {
      control: "select",
      description: "Sets the input size.",
      options: ["small", "middle", "large"],
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "middle" },
      },
    },
    status: {
      control: "select",
      description: "Applies validation status styling.",
      options: ["unset", "error", "warning"],
      mapping: { unset: undefined },
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "unset" },
      },
    },
    variant: {
      control: "select",
      description: "Controls the visual style of the input.",
      options: ["outlined", "filled", "borderless"],
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "outlined" },
      },
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
    locale: { table: { disable: true } },
    dropdownClassName: { table: { disable: true } },
    popupClassName: { table: { disable: true } },
    popupStyle: { table: { disable: true } },
  },
} satisfies Meta<typeof Datepicker>;

export default meta;

function toTestId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");
  return `datepicker-${slug || "datepicker"}`;
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

const withTitle = (args: ComponentProps<typeof Datepicker>) => (
  <div className="my-datepicker-wrapper">
    <span className="my-datepicker-wrapper__title">Title</span>
    <Datepicker {...args} />
  </div>
);

export const WithTitle: Story = {
  render: (args) => {
    useAutoTestId("Title Datepicker");
    return withTitle(args);
  },
};

export const WithoutTitle: Story = {
  render: (args) => {
    useAutoTestId("Datepicker");
    return <Datepicker {...args} />;
  },
};

export const WithTitleFocused: Story = {
  args: {
    autoFocus: true,
  },
  render: (args) => {
    useAutoTestId("Title Datepicker");
    return withTitle(args);
  },
};

export const WithoutTitleFocused: Story = {
  args: {
    autoFocus: true,
  },
  render: (args) => {
    useAutoTestId("Datepicker");
    return <Datepicker {...args} />;
  },
};

export const WithTitleDisabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    useAutoTestId("Title Datepicker");
    return withTitle(args);
  },
};

export const WithoutTitleDisabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    useAutoTestId("Datepicker");
    return <Datepicker {...args} />;
  },
};
