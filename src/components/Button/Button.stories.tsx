import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";
import Button from "./Button";
import { HappyProvider } from "@ant-design/happy-work-theme";

type Args = React.ComponentProps<typeof Button>;

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    type: "default",
    danger: false,
    ghost: false,
    block: false,
    color: undefined,
    variant: undefined,
    icon: undefined,
    iconPlacement: "start",
    size: "middle",
    loading: false,
    disabled: false,
    isRounded: false,
    fullWidth: false,
    style: undefined,
    href: undefined,
    target: undefined,
    htmlType: "button",
    autoInsertSpace: true,
    shape: "default",
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
              Use for main actions (primary), secondary actions (default), or
              less important actions (dashed, text, link).
            </li>
            <li>Use color, variant, and icon to communicate intent.</li>
          </ul>
          <h3>When not to use</h3>
          <ul>
            <li>Do not use for navigation (prefer Link or NavLink).</li>
            <li>Do not use for non-interactive content.</li>
          </ul>
          <h2>Design checklist</h2>
          <ul>
            <li>Use clear, concise labels.</li>
            <li>Group related actions together.</li>
            <li>Use disabled for unavailable actions.</li>
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
          const a = ctx.args as Args;
          const props: string[] = [];
          if (a.type) props.push(`type=\"${a.type}\"`);
          if (a.danger) props.push("danger");
          if (a.ghost) props.push("ghost");
          if (a.block) props.push("block");
          if (a.color) props.push(`color=\"${a.color}\"`);
          if (a.variant) props.push(`variant=\"${a.variant}\"`);
          if (a.iconPlacement)
            props.push(`iconPlacement=\"${a.iconPlacement}\"`);
          if (a.style) props.push("style={...}");
          if (a.href) props.push(`href=\"${a.href}\"`);
          if (a.target) props.push(`target=\"${a.target}\"`);
          if (a.size) props.push(`size=\"${a.size}\"`);
          if (a.loading) props.push("loading");
          if (a.disabled) props.push("disabled");
          if (a.isRounded) props.push("isRounded");
          if (a.fullWidth) props.push("fullWidth");
          if (a.icon) props.push("icon={...}");
          if (a.htmlType) props.push(`htmlType=\"${a.htmlType}\"`);
          if (a.autoInsertSpace !== undefined)
            props.push(`autoInsertSpace={${a.autoInsertSpace}}`);
          if (a.shape) props.push(`shape=\"${a.shape}\"`);
          return `<Button ${props.join(" ")}>${a.children}</Button>`;
        },
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Button label content.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: '"Button"' },
        category: "Button",
      },
    },
    type: {
      control: "select",
      options: ["primary", "default", "dashed", "text", "link"],
      description: "Set button type. Will follow variant & color if provided.",
      table: {
        type: { summary: '"primary" | "default" | "dashed" | "text" | "link"' },
        defaultValue: { summary: '"default"' },
        category: "Button",
      },
    },
    danger: {
      control: "boolean",
      description: "Set the danger status of button.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Button",
      },
    },
    ghost: {
      control: "boolean",
      description:
        "Make background transparent and invert text and border colors.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Button",
      },
    },
    block: {
      control: "boolean",
      description: "Fit button width to its parent width.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Button",
      },
    },
    color: {
      control: "text",
      description: "Set button color (preset or custom).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
        category: "Button",
      },
    },
    variant: {
      control: "select",
      options: ["solid", "outlined", "dashed", "filled", "text", "link"],
      description: "Set button variant.",
      table: {
        type: {
          summary:
            '"solid" | "outlined" | "dashed" | "filled" | "text" | "link"',
        },
        defaultValue: { summary: "-" },
        category: "Button",
      },
    },
    icon: {
      control: false,
      description: "Set the icon component of button.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "-" },
        category: "Button",
      },
    },
    iconPlacement: {
      control: "select",
      options: ["start", "end"],
      description: "Set the icon position of button.",
      table: {
        type: { summary: '"start" | "end"' },
        defaultValue: { summary: '"start"' },
        category: "Button",
      },
    },
    style: {
      control: false,
      description: "Inline style for the button.",
      table: {
        type: { summary: "React.CSSProperties" },
        defaultValue: { summary: "-" },
        category: "Button",
      },
    },
    href: {
      control: "text",
      description: "Redirect url of link button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
        category: "Button",
      },
    },
    target: {
      control: "text",
      description:
        "Same as target attribute of a, works when href is specified.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
        category: "Button",
      },
    },
    size: {
      control: "select",
      options: ["large", "middle", "small"],
      description: "Set the size of button.",
      table: {
        type: { summary: '"large" | "middle" | "small"' },
        defaultValue: { summary: '"middle"' },
        category: "Button",
      },
    },
    loading: {
      control: "boolean",
      description: "Set the loading status of button.",
      table: {
        type: { summary: "boolean | { delay: number, icon: ReactNode }" },
        defaultValue: { summary: "false" },
        category: "Button",
      },
    },
    disabled: {
      control: "boolean",
      description: "Disabled state of button.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Button",
      },
    },
    isRounded: {
      control: "boolean",
      description: "Set border radius to rounded.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Button",
      },
    },
    fullWidth: {
      control: "boolean",
      description: "Set width to 100%.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Button",
      },
    },
    htmlType: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Set the original html type of button.",
      table: {
        type: { summary: '"button" | "submit" | "reset"' },
        defaultValue: { summary: '"button"' },
        category: "Button",
      },
    },
    autoInsertSpace: {
      control: "boolean",
      description: "Add a space between two Chinese characters by default.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Button",
      },
    },
    shape: {
      control: "select",
      options: ["default", "circle", "round"],
      description: "Set button shape.",
      table: {
        type: { summary: '"default" | "circle" | "round"' },
        defaultValue: { summary: '"default"' },
        category: "Button",
      },
    },
    // classNames/styles intentionally omitted from argTypes (not allowed as extra keys)
  },
  render: (args: Args) => <Button {...args} />,
} satisfies Meta<Args>;

// Playground story with surfaceMode control

export const Playground = (props: Args) => <Button {...props} />;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Ant Design Button Examples ---
export const PrimaryButton: Story = {
  name: "Primary Button",
  args: { type: "primary", children: "Primary" },
};

export const DefaultButton: Story = {
  name: "Default Button",
  args: { type: "default", children: "Default" },
};

export const DashedButton: Story = {
  name: "Dashed Button",
  args: { type: "dashed", children: "Dashed" },
};

export const TextButton: Story = {
  name: "Text Button",
  args: { type: "text", children: "Text" },
};

export const LinkButton: Story = {
  name: "Link Button",
  args: { type: "link", children: "Link", href: "https://ant.design" },
};

export const ColorVariant: Story = {
  name: "Color & Variant",
  args: { color: "purple", variant: "outlined", children: "Color & Variant" },
};

export const Icon: Story = {
  name: "Icon",
  args: {
    icon: (
      <span role="img" aria-label="star">
        ★
      </span>
    ),
    children: "Icon",
  },
};

export const IconPlacement: Story = {
  name: "Icon Placement",
  args: {
    icon: (
      <span role="img" aria-label="star">
        ★
      </span>
    ),
    iconPlacement: "end",
    children: "Icon End",
  },
};

export const Size: Story = {
  name: "Size",
  args: { size: "large", children: "Large" },
};

export const Disabled: Story = {
  name: "Disabled",
  args: { disabled: true, children: "Disabled" },
};

export const Loading: Story = {
  name: "Loading",
  args: { loading: true, children: "Loading" },
};

export const MultipleButtons: Story = {
  name: "Multiple Buttons",
  render: () => (
    <>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
    </>
  ),
};

export const GhostButton: Story = {
  name: "Ghost Button",
  args: { ghost: true, children: "Ghost" },
};

export const DangerButtons: Story = {
  name: "Danger Buttons",
  args: { danger: true, children: "Danger" },
};

export const BlockButton: Story = {
  name: "Block Button",
  args: { block: true, children: "Block" },
};

export const GradientButton: Story = {
  name: "Gradient Button",
  args: {
    style: { background: "linear-gradient(90deg, #f00, #00f)" },
    children: "Gradient",
  },
};

export const CustomWave: Story = {
  name: "Custom Wave",
  render: (args) => (
    <HappyProvider>
      <Button {...args}>Wave</Button>
    </HappyProvider>
  ),
};

export const CustomDisabledBg: Story = {
  name: "Custom disabled backgroundColor",
  args: {
    disabled: true,
    style: { backgroundColor: "#eee" },
    children: "Disabled BG",
  },
};

export const CustomSemanticDomStyling: Story = {
  name: "Custom semantic dom styling",
  args: { children: "Semantic DOM" },
};
