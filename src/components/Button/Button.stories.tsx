import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useMemo, useRef } from 'react';
import { useArgs } from '@storybook/preview-api';
import { PlusOutlined, DownloadOutlined } from '@ant-design/icons';
import Button from './Button';

import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';

/**
 * Storybook-only props (NOT passed to component)
 * Include props that are used to toggle real props on the component, such as icons, which can only insert React.Components as values
 * iconChoice is an example, feel free to remove if not in use
 */
type StoryOnlyArgs = {
  iconChoice?: null | 'Plus' | 'Download';
};

/**
 * What render() receives
 */
type ButtonStoryArgs = React.ComponentProps<typeof Button> & StoryOnlyArgs;

/**
 * Helper Variables (if any)
 * START
 */
const iconMap = {
  None: null,
  Plus: <PlusOutlined />,
  Download: <DownloadOutlined />,
} as const;
// End of Helper Variables

const meta = {
  title: 'Components/Button',
  component: Button,

  parameters: {
    docs: {
      primaryStory: 'Default',
      page: () => (
        <>
          {/* ===== Header ===== */}
          <Title />
          <Subtitle>Standard button for triggering actions</Subtitle> 
          <Description />

          {/* ===== Interactive First ===== */}
          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Props</h2>
          <Controls />
          <p>For other properties, see Ant Design's <a href='https://ant.design/components/button'>documentation</a> for Button.</p>

          {/* ===== Usage ===== */}
          <h2>Usage guidelines</h2>

          <h3>When to use</h3>
          <ul>
            <li>
              Use <code>intent="primary"</code> for the <strong>single most important action</strong> in a view or flow.
            </li>
            <li>
              Use <code>intent="secondary"</code> for <strong>supporting actions</strong> such as “Cancel” or “Back”.
            </li>
            <li>
              Use buttons when the action <strong>changes application state</strong>, submits data, or triggers a workflow.
            </li>
          </ul>

          <h3>When not to use</h3>
          <ul>
            <li>
              Do not use more than <strong>one primary button</strong> in the same view.
            </li>
            <li>
              Do not use buttons for <strong>navigation-only</strong> actions — use links instead.
            </li>
            <li>
              Avoid using primary buttons for <strong>destructive actions</strong> unless explicitly designed for it.
            </li>
          </ul>

          {/* ===== Variants ===== */}
          <h2>Variants</h2>
          
          <h3>Primary</h3>
          <p>
            Used for the main call-to-action. Only one primary button should exist per view.
          </p>

          <h3>Primary Inverse</h3>
          <p>
            Used as a second variant to Primary.
          </p>

          <h3>Secondary</h3>
          <p>
            Used for secondary or supporting actions that should not dominate the UI.
          </p>

          <h3>Secondary Inverse</h3>
          <p>
            Used as a second variant to Secondary.
          </p>

          {/* ===== Design ===== */}
          <h2>Design checklist</h2>
          <ul>
            <li>Button labels should start with a <strong>verb</strong>.</li>
            <li>Always use <code>loading</code> for async actions.</li>
            <li>
              Use <code>disabled</code> only when the action is unavailable —
              not as a visual state.
            </li>
            <li>
              Keep button sizes consistent within the same UI area.
            </li>
          </ul>

          {/* ===== Accessibility ===== */}
          <h2>Accessibility</h2>
          <ul>
            <li>Buttons must have accessible text or <code>aria-label</code>.</li>
            <li>Disabled buttons should not receive keyboard focus.</li>
            <li>Loading state must communicate progress to screen readers.</li>
          </ul>

          {/* ===== Examples ===== */}
          <h2>Examples</h2>
          <Stories />
        </>

      ),

      source: {
        type: 'dynamic',
        transform: (_code: string, ctx: any) => {
          if (ctx.story !== 'Playground') {
            return _code;
          }
          // const a = ctx.args as ButtonStoryArgs;
          // const props: string[] = [];

          // if (a.intent) props.push(`intent="${a.intent}"`);
          // if (a.size && a.size !== 'middle') props.push(`size="${a.size}"`);
          // if (a.loading) props.push('loading');
          // if (a.disabled) props.push('disabled');
          // if (a.isRounded) props.push('isRounded');
          // if (a.fullWidth) props.push('fullWidth');
          // if (a.iconPlacement) props.push(`iconPlacement="${a.iconPlacement}"`);

          // if (a.iconChoice && a.iconChoice !== 'None') {
          //   const icon =
          //     a.iconChoice === 'Plus'
          //       ? '<PlusOutlined />'
          //       : '<DownloadOutlined />';
          //   props.push(`icon={${icon}}`);
          // }

          // return `<Button ${props.join(' ')}>${a.children}</Button>`;
        },
      },
    },
  },

  args: {
    children: 'Button',
    intent: 'primary',
    size: 'middle',
    loading: false,
    disabled: false,
    isRounded: false,
    fullWidth: false,
    iconPlacement: undefined,
    // Storybook-only
    iconChoice: null,
  },

  argTypes: {
    'data-testid': { control: 'text', description: "Used by QA Team for automated testing. This field auto-changes with button text, DO NOT modify unless required to.", table: { category: 'QA Testing' } },
    children: { 
      control: 'text',
      table: {
        category: 'Common Antd Props',
      },
    },
    intent: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'primary-inverse', 'secondary-inverse'],
      table: {
        category: 'Custom Props',
      },
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'middle', 'large'],
      table: {
        category: 'Common Antd Props',
      },
    },
    loading: { 
      control: 'boolean', 
      table: {
        category: 'Common Antd Props',
      },
    },
    disabled: { 
      control: 'boolean',
      table: {
        category: 'Common Antd Props',
      },
    },
    isRounded: { 
      control: 'boolean',
      table: {
        category: 'Custom Props',
      },
    },
    fullWidth: { 
      control: 'boolean',
      table: {
        category: 'Custom Props',
      },
    },
    iconPlacement: { 
      control: 'inline-radio',
      options: ['start', 'end'],
      table: {
        category: 'Common Antd Props',
      },
    },

    /**
     * Storybook-only control
     * These variables do not exist on the component but are mainly used for testing variables on the component that use other React components, such as custom icons
     */
    iconChoice: {
      name: 'icon',
      control: 'select',
      options: ['null', 'Plus', 'Download'],
      table: { 
        category: 'Common Antd Props',
        defaultValue: { summary: 'null' } 
      },
    },

    /**
     * Hide real props
     * This is to hide real props on the object that you do not want users to change directly, such as props that you are overriding
     */
    icon: { table: { disable: true } },
  }
} satisfies Meta<ButtonStoryArgs>;

export default meta;
type Story = StoryObj<ButtonStoryArgs>;

/**
 * Helper Functions for Rendering Stories
 */

function toTestId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-_]/g, '');
  return `btn-${slug || 'button'}`;
}

const renderButtonWithIcon = ({ iconChoice, ...args }: ButtonStoryArgs) => (
  <Button
    {...args}
    icon={iconMap[iconChoice ?? 'None']}
  />
)

const renderButtonGroup = (
  buttons: Array<Partial<React.ComponentProps<typeof Button>>>
) => ({ iconChoice, ...args }: ButtonStoryArgs) => (
  <div style={{ display: 'flex', gap: 12 }}>
    {buttons.map((buttonProps, index) => (
      <Button
        key={index}
        {...args}
        {...buttonProps}
        icon={iconMap[iconChoice ?? 'None']}
      />
    ))}
  </div>
);

/* ================= STORIES ================= */

// You can customize how you would like to render out your components in your stories using helper functions.
// Insert your helper function calls under the "render" property, and use "args" property to pass the properties to your helper function

export const Default: Story = {
  args: {

  },
  render: () => {
    // The below code will ensure that data-test-id is set for the Default playground storybook
    // Only applies to Default (Playground Storybook)
    const [args, updateArgs] = useArgs<ButtonStoryArgs>();
    // ✅ label drives the auto id
    const label = typeof args.children === 'string' ? args.children : 'button';
    const nextAuto = useMemo(() => toTestId(label), [label]);
    // ✅ track the last auto-generated value so overrides are respected
    const lastAuto = useRef<string | null>(null); // NOTE: Set to the default value when first loaded
    useEffect(() => {
      const current = (args as any)['data-testid'];
      // Only auto-update when the user hasn't overridden:
      // - it's blank, OR
      // - it equals the previous auto-generated value
      if (!current || current === lastAuto.current) {
        lastAuto.current = nextAuto;
        updateArgs({ 'data-testid': nextAuto } as any);
      }
    }, [nextAuto, updateArgs]); // depends only on label changes

    // ✅ pass ALL args through (type/size/loading/etc included)
    return <Button {...args} />;
  },
};

export const Primary: Story = {
  args: {
    children: 'Button',
    intent: 'primary',
    size: 'middle',
  },
  render: renderButtonWithIcon,
};

export const PrimaryInverse: Story = {
  args: {
    children: 'Button',
    intent: 'primary-inverse',
  },
  render: renderButtonWithIcon,
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    intent: 'secondary',
  },
  render: renderButtonWithIcon,
};

export const SecondaryInverse: Story = {
  args: {
    children: 'Button',
    intent: 'secondary-inverse',
  },
  render: renderButtonWithIcon,
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    iconChoice: "Plus",
  },
  render: renderButtonGroup([
    { intent: 'primary'},
    { intent: 'primary-inverse'},
    { intent: 'secondary'},
    { intent: 'secondary-inverse'},
  ]),
  parameters: {
    controls: { disable: true },
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    loading: true,
  },
  render: renderButtonGroup([
    { intent: 'primary', loading: true},
    { intent: 'primary-inverse', loading: true},
    { intent: 'secondary', loading: true},
    { intent: 'secondary-inverse', loading: true},
  ]),
  parameters: {
    controls: { disable: true },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  render: renderButtonWithIcon,
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width',
    fullWidth: true,
  },
  render: renderButtonGroup([
    { intent: 'primary'},
    { intent: 'primary-inverse'},
    { intent: 'secondary'},
    { intent: 'secondary-inverse'},
  ]),
  parameters: {
    controls: { disable: true },
  },
};

