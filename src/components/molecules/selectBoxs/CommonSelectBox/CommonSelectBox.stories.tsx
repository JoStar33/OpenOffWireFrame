import { ComponentMeta, ComponentStory } from '@storybook/react';
import { checkRowCardList } from 'data/lists/checkRowCardList';
import CommonSelectBox from './CommonSelectBox';

export default {
  title: '분자/셀렉트박스/CommonSelectBox',
  component: CommonSelectBox,
} as ComponentMeta<typeof CommonSelectBox>;

export const CommonSelectBoxTest: ComponentStory<typeof CommonSelectBox> = (args) => (
  <CommonSelectBox {...args} />
);

CommonSelectBoxTest.args = {
  data: checkRowCardList
}