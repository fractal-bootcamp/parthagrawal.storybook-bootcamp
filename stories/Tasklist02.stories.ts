import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Tasklist02, { mockTasks } from './Tasklist02';



const meta: Meta<typeof Tasklist02> = {
  component: Tasklist02,
};
export default meta;

type Story = StoryObj<typeof Tasklist02>;

export const Empty: Story = {
  args: {
    tasks: [{
      "title": "Wash the dishes",
      "description": "Wash them really well",
      "checked": false
    }, {
      "title": "Clean the windows",
      "description": "Do not forget the corners",
      "checked": true
    }, {
      "title": "Vacuum the carpet",
      "description": "And under it as well",
      "checked": false
    }]
  }
};

export const OneItem: Story = {
  args: {
    tasks: []
  }
};