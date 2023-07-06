import { ComponentMeta, ComponentStory } from '@storybook/react';
import { checkRowCardList } from 'data/lists/checkRowCardList';
import { View } from 'react-native';
import { vw } from 'rxn-units';
import CommonSelectBox from './CommonSelectBox';

export default {
  title: '분자/셀렉트박스/CommonSelectBox',
  component: CommonSelectBox,
} as ComponentMeta<typeof CommonSelectBox>;

const SelectBoxList = () => {
  return (
    <View style={{flex: 1, width: vw(100), flexDirection: "row", flexWrap: "wrap"}}>
      <CommonSelectBox data={checkRowCardList}/>
      <CommonSelectBox data={checkRowCardList}/>
      <CommonSelectBox data={checkRowCardList}/>
      <CommonSelectBox data={checkRowCardList}/>
      <CommonSelectBox data={checkRowCardList}/>
      <CommonSelectBox data={checkRowCardList}/>
    </View>
  );
};

export const CommonSelectBoxTest: ComponentStory<typeof CommonSelectBox> = (args) => (
  <CommonSelectBox {...args} />
);

export const SelectBoxListTest: ComponentStory<typeof CommonSelectBox> = () => (
  <SelectBoxList />
);

CommonSelectBoxTest.args = {
  data: checkRowCardList
}