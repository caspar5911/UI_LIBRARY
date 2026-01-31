import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Foundation/Colors',
};

export default meta;

export const Palette = () => (
  <div>
    <div style={{ background: '#1890ff', padding: 16, color: '#fff' }}>
      Primary Blue
    </div>
  </div>
);