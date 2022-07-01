import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconButton } from '../src/components/IconButton'
import { AddCategory } from '../src/components/divideIcons'

export default {
  title: 'Button/Icon',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = () => (
  <IconButton icon={<AddCategory color="#343A40" />} />
)

export const Default = Template.bind({})
