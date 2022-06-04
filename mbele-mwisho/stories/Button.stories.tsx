import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../src/components/button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Button',
}
