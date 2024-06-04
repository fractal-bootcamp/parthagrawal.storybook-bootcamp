import type { Meta, StoryObj } from '@storybook/react';
import { TabDescriptorCard } from './TabDescriptorCard';


const meta: Meta<typeof TabDescriptorCard> = {
  component: TabDescriptorCard,
};

export default meta;
type Story = StoryObj<typeof TabDescriptorCard>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'TabDescriptorCard',
  },
};