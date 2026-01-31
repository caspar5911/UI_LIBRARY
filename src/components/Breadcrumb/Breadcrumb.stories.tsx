import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useMemo, useRef } from 'react';
import { useArgs } from '@storybook/preview-api';
import { PlusOutlined, DownloadOutlined } from '@ant-design/icons';
import Breadcrumb from './Breadcrumb';

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

};

/**
 * What render() receives
 */
type BreadcrumbStoryArgs = React.ComponentProps<typeof Breadcrumb> & StoryOnlyArgs;

// Start of Helper Variables

// End of Helper variables

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,

  parameters: {
    docs: {
      primaryStory: 'Default',
      page: () => (
        <>
          {/* Replace the sections with (TO REPLACE) with your own information of the component */}
          {/* ===== Header ===== */}
          <Title />
          <Subtitle>Display the current location within a hierarchy. And allow going back to states higher up in the hierarchy.</Subtitle> 
          <Description />

          {/* ===== Interactive First ===== */}
          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Props</h2>
          <Controls />
          {/* You can remove the below <p> if you are not referencing an external framework */}
          <p>For other properties, see Ant Design's <a href='https://ant.design/components/breadcrumb'>documentation</a> for Breadcrumb.</p>

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

  /**
   * Populate args with the default values of your props
   * TO REPLACE with your own prop default values
   */
  args: {

  },

  /**
   * Populate argTypes with the configuration of your component's props
   * The prop name should be the object property (e.g. children)
   * The config object should be the object value.
   * See the below samples for how you can customize your props for your table
   * Use table & category to put your properties in separate collapsible sections in the props table
   *
   * TO REPLACE with your own props
   */
  argTypes: {
    'data-testid': { control: 'text', table: { category: 'QA Testing' } },
    
  }
} satisfies Meta<BreadcrumbStoryArgs>;

export default meta;
type Story = StoryObj<BreadcrumbStoryArgs>;

/**
 * Helper Functions for Rendering Stories
 */

// For setting data-testid on the Default Playground, Replace "btn" and "button" with the proper prefix based on UX Team's naming convention for labels
function toTestId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-_]/g, '');
  return `btn-${slug || 'button'}`;
}

const renderBreadcrumb = ({ ...args }: BreadcrumbStoryArgs) => (
  <Breadcrumb {...args} />
);

// End of Helper Functions

/* ================= STORIES ================= */

// You can customize how you would like to render out your components in your stories using helper functions.
// Insert your helper function calls under the "render" property, and use "args" property to pass the properties to your helper function.

export const Default: Story = {
  args: {

  },
  render: () => {
    // The below code will ensure that data-test-id is set for the Default playground storybook
    // Only applies to Default (Playground Storybook)
    const [args, updateArgs] = useArgs<BreadcrumbStoryArgs>();
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
    return <Breadcrumb {...args} />;
  },
};

export const Primary: Story = {
  args: {
    children: 'Test',
  },
  render: renderBreadcrumb,
};