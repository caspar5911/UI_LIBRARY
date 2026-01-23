import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import Button from "./Button";

import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

/**
 * Storybook-only props (NOT passed to component)
 */
type StoryOnlyArgs = {
  iconChoice?: "None" | "Plus" | "Download";
};

/**
 * What render() receives
 */
type StoryRenderArgs = React.ComponentProps<typeof Button> & StoryOnlyArgs;

const iconMap = {
  None: null,
  Plus: <PlusOutlined />,
  Download: <DownloadOutlined />,
} as const;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  /**
   * ✅ GLOBAL DEFAULTS
   * Applies to:
   * - Controls
   * - Docs Primary
   * - Source transform
   */
  args: {
    children: "Button",
    intent: "primary",
    size: "middle",
    loading: false,
    disabled: false,
    isRounded: false,
    fullWidth: false,

    // @ts-expect-error: iconChoice is a Storybook-only control
    iconChoice: "None",
  },

  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />

          <h2>Usage guidelines</h2>
          <h3>When to use</h3>
          <ul>
            <li>
              Primary actions → <code>intent="primary"</code>
            </li>
            <li>
              Secondary actions → <code>intent="secondary"</code>
            </li>
          </ul>

          <h3>When not to use</h3>
          <ul>
            <li>Multiple primary actions in the same view</li>
          </ul>

          <h2>Design checklist</h2>
          <ul>
            <li>Use verbs for labels</li>
            <li>Use loading for async actions</li>
            <li>Be consistent with size</li>
          </ul>

          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Variables</h2>
          <Controls />

          <Stories />
        </>
      ),

      source: {
        type: "dynamic",
        transform: (_code: string, ctx: any) => {
          const a = ctx.args as StoryRenderArgs;
          const props: string[] = [];

          if (a.intent) props.push(`intent="${a.intent}"`);
          if (a.size && a.size !== "middle") props.push(`size="${a.size}"`);
          if (a.loading) props.push("loading");
          if (a.disabled) props.push("disabled");
          if (a.isRounded) props.push("isRounded");
          if (a.fullWidth) props.push("fullWidth");

          if (a.iconChoice && a.iconChoice !== "None") {
            const icon =
              a.iconChoice === "Plus"
                ? "<PlusOutlined />"
                : "<DownloadOutlined />";
            props.push(`icon={${icon}}`);
          }

          return `<Button ${props.join(" ")}>${a.children}</Button>`;
        },
      },
    },
  },

  argTypes: {
    children: { control: "text" },

    intent: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },

    size: {
      control: "inline-radio",
      options: ["small", "middle", "large"],
    },

    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    isRounded: { control: "boolean" },
    fullWidth: { control: "boolean" },

    /**
     * Storybook-only control
     */
    iconChoice: {
      name: "icon",
      control: "select",
      options: ["None", "Plus", "Download"],
      table: {
        // category: "Storybook",
        defaultValue: { summary: "None" },
      },
    },

    /**
     * Hide real props
     */
    icon: { table: { disable: true } },
  } as Meta<typeof Button>["argTypes"],
};

export default meta;
type Story = StoryObj<typeof Button>;

const renderWithIcon = ({ iconChoice, ...args }: StoryRenderArgs) => (
  <Button {...args} icon={iconMap[iconChoice ?? "None"]} />
);

/* ================= STORIES ================= */

export const Primary: Story = {
  args: {
    children: "Primary Button",
    intent: "primary",
    size: "middle",
  },
  render: renderWithIcon,
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    intent: "secondary",
  },
  render: renderWithIcon,
};

export const WithIcon: Story = {
  args: {
    children: "With Icon",
  },
  render: renderWithIcon,
};

export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
  render: renderWithIcon,
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  render: renderWithIcon,
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    fullWidth: true,
  },
  render: renderWithIcon,
};
