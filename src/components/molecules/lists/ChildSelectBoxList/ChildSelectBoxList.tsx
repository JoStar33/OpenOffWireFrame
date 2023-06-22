import SelectedItemButton from "components/atoms/buttons/SelectedItemButton/SelectedItemButton";
import ChildSelectBox from "components/molecules/selectBoxs/ChildSelectBox/ChildSelectBox";
import { View } from "react-native";
import { SelectBox } from "types/apps/selectbox";
import { selectBoxListStyles } from "./ChildSelectBoxList.style";

interface Props<T> {
  handleChange: (search: string) => void;
  clicked: boolean;
  data: T[];
  handleSelected: (title: string) => void;
}

//셀렉트 박스의 각 리스트들을 리스트업해주는 컴포넌트
const ChildSelectBoxList = <T extends SelectBox>({
  clicked,
  data,
  handleSelected,
}: Props<T>) => {
  return (
    <>
      {clicked ? (
        <View style={selectBoxListStyles.container}>
          {
            data.map((option, _id) => 
              option.child ? (
                <ChildSelectBox key={_id} data={option.child} handleSelected={handleSelected}/>
              ) : (
                <SelectedItemButton<T>
                  key={_id}
                  handleSelected={handleSelected}
                  item={option}
                />
              )
            )
          }
        </View>
      ) : null}
    </>
  );
};

export default ChildSelectBoxList;
