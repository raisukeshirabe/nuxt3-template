import { Meta, Story } from '@storybook/vue3'
import BaseButton from '../base/BaseButton.vue'

export default {
  title: 'components/BaseButton',
  component: BaseButton,
  argTypes: { click: { action: 'click' } },
} as Meta<typeof BaseButton>

const Template: Story<typeof BaseButton> = () => ({
  components: { BaseButton },
  template: '<BaseButton @click="click">ボタン</BaseButton>',
})

export const Default = Template.bind({})
Default.storyName = 'BaseButton'
