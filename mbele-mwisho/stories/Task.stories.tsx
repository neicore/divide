import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Task } from '../src/components/task'

export default {
  title: 'Task',
  component: Task,
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = () => <Task />

export const Default = Template.bind({})
