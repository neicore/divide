import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LogoIcon } from '../src/components/logo'

export default {
  title: 'Logo/Icon',
  component: LogoIcon,
} as ComponentMeta<typeof LogoIcon>

const Template: ComponentStory<typeof LogoIcon> = () => <LogoIcon />

export const Default = Template.bind({})
