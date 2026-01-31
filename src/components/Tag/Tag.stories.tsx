import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useMemo, useRef } from 'react';
import { useArgs } from '@storybook/preview-api';
import { PlusOutlined, DownloadOutlined } from '@ant-design/icons';
import Tag from './Tag';

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
  iconChoice?: 'None' | 'Plus' | 'Download';
};

/**
 * What render() receives
 */
type TagStoryArgs = React.ComponentProps<typeof Tag> & StoryOnlyArgs;

/**
 * Helper Variables (if any)
 * START
 */
const iconMap = {
  None: null,
  Plus: <PlusOutlined />,
  Download: <DownloadOutlined />,
} as const;
// End of Helper variables

const meta = {
  title: 'Components/Tag',
  component: Tag,

  parameters: {
    docs: {
      page: () => (
        <>
          {/* Replace the sections with (TO REPLACE) with your own information of the component */}
          {/* ===== Header ===== */}
          <Title />
          <Subtitle>Used for categorizsation and marking</Subtitle> 
          <Description />

          {/* ===== Interactive First ===== */}
          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Props</h2>
          <Controls />
          {/* You can remove the below <p> if you are not referencing an external framework */}
          <p>For other properties, see Ant Design's <a href='https://ant.design/components/tag'>documentation</a> for Tag.</p>

          {/* ===== Usage ===== */}
          <h2>Usage guidelines</h2>

          <h3>When to use</h3>
          {/* TO REPLACE with your own info */}
          <ul>
            <li>
              Sample 1
            </li>
            <li>
              <code>Sample Code</code>
            </li>
            <li>
              <strong>Sample Bold</strong>
            </li>
          </ul>

          <h3>When not to use</h3>
          {/* TO REPLACE with your own info */}
          <ul>
            <li>
              Sample 1
            </li>
            <li>
              <code>Sample Code</code>
            </li>
            <li>
              <strong>Sample Bold</strong>
            </li>
          </ul>

          {/* ===== Variants ===== */}
          <h2>Variants</h2>
          {/* TO REPLACE with your own info */}
          {/* You can add more variants by copy and pasting the below samples. Ensure that you are always using <h3> and <p> tags for standardization */}
          <h3>Primary</h3>
          <p>
            Used for the main call-to-action. Only one primary button should exist per view.
          </p>

          <h3>Secondary</h3>
          <p>
            Used for secondary or supporting actions that should not dominate the UI.
          </p>
          
          {/* ===== Design ===== */}
          <h2>Design checklist</h2>
          {/* TO REPLACE with your own info */}
          <ul>
            <li>
              Sample 1
            </li>
            <li>
              <code>Sample Code</code>
            </li>
            <li>
              <strong>Sample Bold</strong>
            </li>
          </ul>

          {/* ===== Accessibility ===== */}
          <h2>Accessibility</h2>
          {/* TO REPLACE with your own info */}
          <ul>
            <li>
              Sample 1
            </li>
            <li>
              <code>Sample Code</code>
            </li>
            <li>
              <strong>Sample Bold</strong>
            </li>
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
          // Add Logic here if you are reformatting the source code for users to copy

          return <div></div>;
        },
      },
    },
  },

  args: {
    children: 'Tag', 
    intent: 'primary', 
    tagColor: 'grey',
    // Storybook-only
    iconChoice: 'None',
  },

  argTypes: {
    'data-testid': { control: 'text', description: "Used by QA Team for automated testing. This field auto-changes with tag text, DO NOT modify unless required to.", table: { category: 'QA Testing' } },

    children: { 
      control: 'text',
      table: {
        category: 'Common Antd Props',
      },
    },

    intent: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
      table: {
        category: 'Custom Props',
      },
    },
    tagColor: {
      control: 'inline-radio',
      options: ['grey', 'yellow', 'red', 'blue', 'green'],
      table: {
        category: 'Custom Props',
      },
    },

    /**
     * Storybook-only control
     * These variables do not exist on the component but are mainly used for testing variables on the component that use other React components, such as custom icons.
     */
    iconChoice: {
      name: 'icon',
      control: 'select',
      options: ['None', 'Plus', 'Download'],
      table: {
        category: 'Common Antd Props',
        defaultValue: { summary: 'None' },
      },
    },

    /**
     * Hide real props
     * This is to hide real props on the object that you do not want users to change directly, such as props that you are overriding.
     */
    icon: { table: { disable: true } },
  }
} satisfies Meta<TagStoryArgs>;

export default meta;
type Story = StoryObj<TagStoryArgs>;

/**
 * Helper Functions for Rendering Stories
 */

function toTestId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-_]/g, '');
  return `tag-${slug || 'tag'}`;
}

const renderTagWithIcon = ({ iconChoice, ...args }: TagStoryArgs) => (
  <Tag {...args} icon={iconMap[iconChoice ?? 'None']} />
);

const renderTagGroup = (
  tags: Array<Partial<React.ComponentProps<typeof Tag>>>
) => ({ iconChoice, ...args }: TagStoryArgs) => (
  <div style={{ display: 'flex', gap: 12 }}>
    {tags.map((tagProps, index) => (
      <Tag
        key={index}
        {...args}
        {...tagProps}
        icon={iconMap[iconChoice ?? 'None']}
      />
    ))}
  </div>
);
const renderMultipleTagGroups = (
  tagArray: Array<Array<Partial<React.ComponentProps<typeof Tag>>>>
) => ({ iconChoice, ...args }: TagStoryArgs) => (
  <div>
    {tagArray.map((tags, index) => (
      <div style={index < tagArray.length - 1 ? { marginBottom: "14px" } : undefined}>
        <div style={{ display: 'flex', gap: 12 }}>
          {tags.map((tagProps, index) => (
            <Tag
              key={index}
              {...args}
              {...tagProps}
              icon={iconMap[iconChoice ?? 'None']}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

// End of Helper Functions

/* ================= STORIES ================= */

// You can customize how you would like to render out your components in your stories using helper functions.
// Insert your helper function calls under the "render" property, and use "args" property to pass the properties to your helper function

export const Default: Story = {
  args: {

  },
  render: () => {
    // The below code will ensure that data-test-id is set for the Default playground storybook
    // Only applies to Default (Playground Storybook)
    const [args, updateArgs] = useArgs<TagStoryArgs>();
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
    return <Tag {...args} />;
  },
};

export const Primary: Story = {
  args: {
    children: 'Tag',
  },
  render: renderTagGroup([
    { intent: 'primary', tagColor: 'grey'},
    { intent: 'primary', tagColor: 'yellow'},
    { intent: 'primary', tagColor: 'red'},
    { intent: 'primary', tagColor: 'blue'},
    { intent: 'primary', tagColor: 'green'},
  ]),
  parameters: {
    controls: { disable: true },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Tag',
  },
  render: renderTagGroup([
    { intent: 'secondary', tagColor: 'grey'},
    { intent: 'secondary', tagColor: 'yellow'},
    { intent: 'secondary', tagColor: 'red'},
    { intent: 'secondary', tagColor: 'blue'},
    { intent: 'secondary', tagColor: 'green'},
  ]),
  parameters: {
    controls: { disable: true },
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Tag',
    iconChoice: "Plus",
  },
  render: renderMultipleTagGroups([
    [
      { intent: 'primary', tagColor: 'grey'},
      { intent: 'primary', tagColor: 'yellow'},
      { intent: 'primary', tagColor: 'red'},
      { intent: 'primary', tagColor: 'blue'},
      { intent: 'primary', tagColor: 'green'},
    ],
    [
      { intent: 'secondary', tagColor: 'grey'},
      { intent: 'secondary', tagColor: 'yellow'},
      { intent: 'secondary', tagColor: 'red'},
      { intent: 'secondary', tagColor: 'blue'},
      { intent: 'secondary', tagColor: 'green'},
    ]
  ]),
  parameters: {
    controls: { disable: true },
  },
};
