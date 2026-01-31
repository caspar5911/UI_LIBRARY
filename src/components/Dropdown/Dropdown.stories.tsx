import type { ComponentProps } from "react";
import { useEffect, useMemo, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import Dropdown from "./Dropdown";

import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

type DropdownStoryArgs = ComponentProps<typeof Dropdown>;

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,

  parameters: {
    docs: {
      description: {
        component:
          "Dropdown wraps Ant Design's Select to provide a constrained API and QA test hooks while keeping AntD behavior intact.",
      },
      primaryStory: "Default",
      page: () => (
        <>
          <Title />
          <Subtitle>
            Select an option using Ant Design&apos;s Select wrapper.
          </Subtitle>
          <Description />

          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Props</h2>
          <Controls />
          <p>
            For other properties, see Ant Design&apos;s documentation for
            Select.
          </p>

          <h2>Usage guidelines</h2>
          <h3>When to use</h3>
          <ul>
            <li>Picking from a short, known list of options.</li>
            <li>Form fields that benefit from standardized option lists.</li>
            <li>Filtering and sorting views with discrete values.</li>
          </ul>

          <h3>When not to use</h3>
          <ul>
            <li>Free-form text input (use an input field).</li>
            <li>Highly custom option rendering.</li>
            <li>Large datasets that require async search.</li>
          </ul>

          <h2>Variants</h2>
          <h3>With title</h3>
          <p>Use when the field needs an explicit label above the control.</p>

          <h3>Without title</h3>
          <p>Use when the label is provided by surrounding UI.</p>

          <h2>Design checklist</h2>
          <ul>
            <li>Label style matches nearby form fields.</li>
            <li>Input size aligns with adjacent controls.</li>
            <li>Dropdown placement avoids obscuring content.</li>
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
    allowClear: false,
    autoFocus: false,
    defaultOpen: false,
    disabled: false,
    direction: "ltr",
    loading: false,
    mode: undefined,
    placement: "bottomLeft",
    showSearch: false,
    size: "middle",
    status: undefined,
    variant: "outlined",
    virtual: true,
    "data-testid": "dd-dropdown",
  },

  argTypes: {
    "data-testid": {
      control: "text",
      description: "Used by QA for automated testing.",
      table: {
        category: "QA Testing",
        defaultValue: { summary: "dd-dropdown" },
      },
    },
    allowClear: {
      control: "boolean",
      description: "Show a clear icon to remove the current selection.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    autoFocus: {
      control: "boolean",
      description: "Focus the control on mount.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description: "Open the dropdown menu by default.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable user interaction.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    direction: {
      control: "inline-radio",
      options: ["ltr", "rtl"],
      description: "Text direction for the control.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "ltr" },
      },
    },
    loading: {
      control: "boolean",
      description: "Show a loading indicator.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    mode: {
      control: "inline-radio",
      options: [undefined, "multiple", "tags"],
      description:
        "Selection mode for single, multiple, or tag entry selection.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "undefined" },
      },
    },
    placement: {
      control: "select",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
      description: "Dropdown placement relative to the trigger.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "bottomLeft" },
      },
    },
    showSearch: {
      control: "boolean",
      description: "Enable search input in the dropdown.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: "inline-radio",
      options: ["large", "middle", "small"],
      description: "Control size.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "middle" },
      },
    },
    status: {
      control: "inline-radio",
      options: [undefined, "error", "warning"],
      description: "Validation status styling.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "undefined" },
      },
    },
    variant: {
      control: "inline-radio",
      options: ["outlined", "filled", "borderless"],
      description: "Visual style variant.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "outlined" },
      },
    },
    virtual: {
      control: "boolean",
      description: "Use virtualized list rendering for large option sets.",
      table: {
        category: "Common Antd Props",
        defaultValue: { summary: "true" },
      },
    },
  },
} satisfies Meta<DropdownStoryArgs>;

export default meta;
type Story = StoryObj<DropdownStoryArgs>;

function toTestId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");
  return `dd-${slug || "dropdown"}`;
}

const useAutoTestId = (label: string) => {
  const [args, updateArgs] = useArgs<DropdownStoryArgs>();
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

const withTitle = (args: DropdownStoryArgs) => (
  <div className="my-dropdown-wrapper">
    <span className="my-dropdown-wrapper__title">Title</span>
    <Dropdown {...args} />
  </div>
);

const renderWithTitle = (label: string) => (args: DropdownStoryArgs) => {
  useAutoTestId(label);
  return withTitle(args);
};

const renderWithoutTitle = (label: string) => (args: DropdownStoryArgs) => {
  useAutoTestId(label);
  return <Dropdown {...args} />;
};

export const Default: Story = {
  render: renderWithoutTitle("Dropdown"),
};

export const WithTitle: Story = {
  render: renderWithTitle("Title Dropdown"),
};

export const WithTitleDisabled: Story = {
  args: {
    disabled: true,
  },
  render: renderWithTitle("Title Dropdown"),
};

export const WithTitleLoading: Story = {
  args: {
    loading: true,
  },
  render: renderWithTitle("Title Dropdown"),
};

export const WithTitleAllowClear: Story = {
  args: {
    allowClear: true,
  },
  render: renderWithTitle("Title Dropdown"),
};

export const WithTitleShowSearch: Story = {
  args: {
    showSearch: true,
  },
  render: renderWithTitle("Title Dropdown"),
};

export const WithTitleSizeLarge: Story = {
  args: {
    size: "large",
  },
  render: renderWithTitle("Title Dropdown"),
};

export const WithTitleStatusError: Story = {
  args: {
    status: "error",
  },
  render: renderWithTitle("Title Dropdown"),
};

export const WithTitleVariantFilled: Story = {
  args: {
    variant: "filled",
  },
  render: renderWithTitle("Title Dropdown"),
};

export const WithTitleModeMultiple: Story = {
  args: {
    mode: "multiple",
  },
  render: renderWithTitle("Title Dropdown"),
};

export const WithoutTitle: Story = {
  render: renderWithoutTitle("Dropdown"),
};

export const WithoutTitleAutoFocus: Story = {
  args: {
    autoFocus: true,
  },
  parameters: {
    docs: { disable: true },
  },
  render: renderWithoutTitle("Dropdown"),
};

export const WithoutTitleDefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
  render: renderWithoutTitle("Dropdown"),
};

export const WithoutTitleDirectionRtl: Story = {
  args: {
    direction: "rtl",
  },
  render: renderWithoutTitle("Dropdown"),
};

export const WithoutTitlePlacementTopRight: Story = {
  args: {
    placement: "topRight",
  },
  render: renderWithoutTitle("Dropdown"),
};

export const WithoutTitleVariantBorderless: Story = {
  args: {
    variant: "borderless",
  },
  render: renderWithoutTitle("Dropdown"),
};

export const WithoutTitleVirtualOff: Story = {
  args: {
    virtual: false,
  },
  render: renderWithoutTitle("Dropdown"),
};
