import type { ComponentProps } from "react";
import { useEffect, useMemo, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import DateTimepicker from "./DateTimepicker";

import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

type DateTimepickerStoryArgs = ComponentProps<typeof DateTimepicker>;

const meta = {
  title: "Components/DateTimepicker",
  component: DateTimepicker,

  parameters: {
    docs: {
      description: {
        component:
          "DateTimepicker wraps Ant Design's DatePicker with time enabled to provide a consistent API and QA test hooks while keeping AntD behavior intact.",
      },
      primaryStory: "Default",
      page: () => (
        <>
          <Title />
          <Subtitle>
            Select a date and time using Ant Design's DatePicker wrapper.
          </Subtitle>
          <Description />

          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Props</h2>
          <Controls />
          <p>
            For other properties, see Ant Design&apos;s documentation for
            DatePicker.
          </p>

          <h2>Usage guidelines</h2>
          <h3>When to use</h3>
          <ul>
            <li>Scheduling a specific date and time (meetings, deadlines).</li>
            <li>Collecting timestamp inputs in forms or filters.</li>
            <li>When a calendar + time selector is clearer than typing.</li>
          </ul>

          <h3>When not to use</h3>
          <ul>
            <li>Choosing a date range (use RangePicker).</li>
            <li>Entering approximate or free-form dates.</li>
            <li>Selecting multiple discrete timestamps.</li>
          </ul>

          <h2>Variants</h2>
          <h3>With title</h3>
          <p>Use when the field needs an explicit label above the control.</p>

          <h3>Without title</h3>
          <p>
            Use when the label is provided by surrounding UI or layout context.
          </p>

          <h2>Design checklist</h2>
          <ul>
            <li>Label style matches nearby form fields.</li>
            <li>Input size aligns with adjacent controls.</li>
            <li>Popover placement avoids obscuring important content.</li>
          </ul>

          <h2>Accessibility</h2>
          <ul>
            <li>
              Ensure the label is programmatically associated when present.
            </li>
            <li>Keyboard users can open the panel and select values.</li>
            <li>Validation states are announced clearly.</li>
          </ul>

          <h2>Examples</h2>
          <Stories />
        </>
      ),

      source: {
        type: "dynamic",
      },
    },
  },

  args: {
    allowClear: true,
    autoFocus: false,
    bordered: true,
    disabled: false,
    inputReadOnly: false,
    placement: "bottomLeft",
    picker: "date",
    showNow: true,
    showToday: true,
    size: "middle",
  },

  argTypes: {
    "data-testid": {
      control: "text",
      description: "Used by QA for automated testing.",
      table: {
        category: "QA Testing",
        defaultValue: { summary: "dtp-default" },
      },
    },
    allowClear: {
      control: "boolean",
      description: "Show the clear icon.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "true" },
      },
    },
    autoFocus: {
      control: "boolean",
      description: "Auto focus on mount.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    bordered: {
      control: "boolean",
      description: "Whether to show the border.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "true" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable the picker.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    inputReadOnly: {
      control: "boolean",
      description: "Read-only input field.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    placement: {
      control: "select",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
      description: "Popup placement.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "bottomLeft" },
      },
    },
    picker: {
      control: "select",
      options: ["date", "week", "month", "quarter", "year"],
      description: "Date panel mode.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "date" },
      },
    },
    showNow: {
      control: "boolean",
      description: "Show the Now button in the time panel.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "true" },
      },
    },
    showToday: {
      control: "boolean",
      description: "Show the Today button in the date panel.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "true" },
      },
    },
    size: {
      control: "select",
      options: ["small", "middle", "large"],
      description: "Input size.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "middle" },
      },
    },
    status: {
      control: "select",
      options: ["undefined", "error", "warning"],
      mapping: { undefined: undefined },
      description: "Validation status.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<DateTimepickerStoryArgs>;

export default meta;
type Story = StoryObj<DateTimepickerStoryArgs>;

function toTestId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");
  return `dtp-${slug || "default"}`;
}

const useAutoTestId = (label: string) => {
  const [args, updateArgs] = useArgs<DateTimepickerStoryArgs>();
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

const withTitle = (args: DateTimepickerStoryArgs) => (
  <div className="my-datetimepicker-wrapper">
    <span className="my-datetimepicker-wrapper__title">Title</span>
    <DateTimepicker {...args} />
  </div>
);

const renderWithTitle = (label: string) => (args: DateTimepickerStoryArgs) => {
  useAutoTestId(label);
  return withTitle(args);
};

const renderWithoutTitle =
  (label: string) => (args: DateTimepickerStoryArgs) => {
    useAutoTestId(label);
    return <DateTimepicker {...args} />;
  };

export const WithTitle: Story = {
  render: renderWithTitle("Title DateTimepicker"),
};

export const WithTitleFocused: Story = {
  args: {
    autoFocus: true,
  },
  parameters: {
    docs: { disable: true },
  },
  render: renderWithTitle("Title DateTimepicker"),
};

export const WithTitleDisabled: Story = {
  args: {
    disabled: true,
  },
  render: renderWithTitle("Title DateTimepicker"),
};

export const WithTitleStatusError: Story = {
  args: {
    status: "error",
  },
  render: renderWithTitle("Title DateTimepicker"),
};

export const WithTitleStatusWarning: Story = {
  args: {
    status: "warning",
  },
  render: renderWithTitle("Title DateTimepicker"),
};

export const WithoutTitle: Story = {
  render: renderWithoutTitle("DateTimepicker"),
};

export const WithoutTitleFocused: Story = {
  args: {
    autoFocus: true,
  },
  parameters: {
    docs: { disable: true },
  },
  render: renderWithoutTitle("DateTimepicker"),
};

export const WithoutTitleDisabled: Story = {
  args: {
    disabled: true,
  },
  render: renderWithoutTitle("DateTimepicker"),
};

export const WithoutTitleReadOnly: Story = {
  args: {
    inputReadOnly: true,
  },
  render: renderWithoutTitle("DateTimepicker"),
};

export const WithoutTitleNoClear: Story = {
  args: {
    allowClear: false,
  },
  render: renderWithoutTitle("DateTimepicker"),
};
