import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from '../src/components/logo'

export default {
  title: 'Logo/Full',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = () => <Logo />

export const Default = Template.bind({})
