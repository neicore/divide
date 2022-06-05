import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CounterBadge } from '../src/components/CounterBadge'

export default {
  title: 'Folder/CounterBadge',
  component: CounterBadge,
} as ComponentMeta<typeof CounterBadge>

const Template: ComponentStory<typeof CounterBadge> = () => (
  <CounterBadge value="30" />
)

export const Default = Template.bind({})
