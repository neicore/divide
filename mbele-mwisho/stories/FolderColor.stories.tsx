import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FolderColor } from '../src/components/FolderColor'

export default {
  title: 'Folder/Color',
  component: FolderColor,
} as ComponentMeta<typeof FolderColor>

const Template: ComponentStory<typeof FolderColor> = () => (
  <FolderColor color="#74CDFF" />
)

export const Default = Template.bind({})
