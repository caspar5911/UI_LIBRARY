import type { ComponentProps } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Input from './Input';

import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';

type InputStoryArgs = ComponentProps<typeof Input>;

const meta = {
  title: 'Components/Input',
  component: Input,

  parameters: {
    docs: {
      primaryStory: 'Default',
      page: () => (
        <>
          <Title />
          <Subtitle>Capture short, single-line text with a constrained Input wrapper.</Subtitle>
          <Description />

          <h2>Playground</h2>
          <DocsPrimary />

          <h2>Props</h2>
          <Controls />
          <p>
            For other properties, see Ant Design&apos;s documentation for Input.
          </p>

          <h2>Usage guidelines</h2>

          <h3>When to use</h3>
          <ul>
            <li>Short, single-line text entry such as names, labels, or IDs.</li>
            <li>Search or filter inputs with a known, brief value.</li>
            <li>Forms that need a consistent, accessible input control.</li>
          </ul>

          <h3>When not to use</h3>
          <ul>
            <li>Multi-line or rich text entry (use a text area).</li>
            <li>Long, complex, or formatted input requirements.</li>
            <li>Selections from a fixed list (use Select/Dropdown).</li>
          </ul>

          <h2>Variants</h2>
          <h3>Outlined</h3>
          <p>Default input style with a clear border for form layouts.</p>

          <h3>Filled</h3>
          <p>Use for subtle emphasis in dense forms or secondary surfaces.</p>

          <h3>Borderless</h3>
          <p>Use when the input sits inside a container that already provides a boundary.</p>

          <h2>Design checklist</h2>
          <ul>
            <li>Label and placeholder are distinct and not duplicated.</li>
            <li>Input width aligns with other fields in the form.</li>
            <li>Validation states are clearly visible.</li>
          </ul>

          <h2>Accessibility</h2>
          <ul>
            <li>Provide a visible label or associate one via the form.</li>
            <li>Ensure focus outlines are visible on all themes.</li>
            <li>Validation errors are announced to assistive tech.</li>
          </ul>

          <h2>Examples</h2>
          <Stories />
        </>
      ),

      source: {
        type: 'dynamic',
      },
    },
  },

  args: {
    allowClear: false,
    autoFocus: false,
    disabled: false,
    readOnly: false,
    showCount: false,
    size: 'middle',
    status: undefined,
    type: 'text',
    variant: 'outlined',
    'data-testid': 'input-input',
  },

  argTypes: {
    'data-testid': { control: 'text', table: { category: 'QA Testing' } },
    allowClear: {
      control: 'boolean',
      description: 'Show a clear icon to reset the value.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'false' } },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Focus the input when it mounts.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'Make the input read-only.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'false' } },
    },
    showCount: {
      control: 'boolean',
      description: 'Show the character count.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'inline-radio',
      options: ['large', 'middle', 'small'],
      description: 'Input size.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'middle' } },
    },
    status: {
      control: 'inline-radio',
      options: [undefined, 'error', 'warning'],
      description: 'Validation status styling.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'undefined' } },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'url', 'tel'],
      description: 'HTML input type.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'text' } },
    },
    variant: {
      control: 'inline-radio',
      options: ['outlined', 'filled', 'borderless'],
      description: 'Visual style of the input chrome.',
      table: { category: 'Common Antd Props', defaultValue: { summary: 'outlined' } },
    },
  },
} satisfies Meta<InputStoryArgs>;

export default meta;
type Story = StoryObj<InputStoryArgs>;

function toTestId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-_]/g, '');
  return `input-${slug || 'input'}`;
}

const useAutoTestId = (label: string) => {
  const [args, updateArgs] = useArgs<InputStoryArgs>();
  const nextAuto = useMemo(() => toTestId(label), [label]);
  const lastAuto = useRef<string | null>(null);

  useEffect(() => {
    const current = (args as any)['data-testid'];
    if (!current || current === lastAuto.current) {
      lastAuto.current = nextAuto;
      updateArgs({ 'data-testid': nextAuto } as any);
    }
  }, [nextAuto, updateArgs, args]);
};

const renderInput = (label: string) => (args: InputStoryArgs) => {
  useAutoTestId(label);
  return <Input {...args} />;
};

export const Default: Story = {
  render: renderInput('Input'),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: renderInput('Input'),
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
  render: renderInput('Input'),
};

export const WithClear: Story = {
  args: {
    allowClear: true,
  },
  render: renderInput('Input'),
};

export const ShowCount: Story = {
  args: {
    showCount: true,
  },
  render: renderInput('Input'),
};

export const TypePassword: Story = {
  args: {
    type: 'password',
  },
  render: renderInput('Input'),
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
  render: renderInput('Input'),
};

export const StatusError: Story = {
  args: {
    status: 'error',
  },
  render: renderInput('Input'),
};

export const VariantFilled: Story = {
  args: {
    variant: 'filled',
  },
  render: renderInput('Input'),
};
