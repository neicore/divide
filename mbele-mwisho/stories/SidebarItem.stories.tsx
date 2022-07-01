import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SidebarItem } from '../src/components/sidebarItem'
import { FolderColor } from '../src/components/folderColor'
import { CounterBadge } from '../src/components/counterBadge'

export default {
  title: 'Sidebar/Item',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>

const Template: ComponentStory<typeof SidebarItem> = () => (
  <SidebarItem
    icon={<FolderColor color="#FFF174" />}
    label="Projects"
    counterBadge={<CounterBadge value="500" />}
  />
)

export const Default = Template.bind({})
