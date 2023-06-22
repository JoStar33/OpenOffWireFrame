import SelectBoxButton from "components/atoms/buttons/SelectBoxButton/SelectBoxButton";
import SelectBoxList from "components/molecules/lists/SelectBoxList/SelectBoxList";
import { useState } from "react";
import {
  View
} from "react-native";
import { SelectBox } from "types/apps/selectbox";

interface Props<T> {
  data: T[];
}

//셀렉트 박스 전체 기능을 묶어놓은 컴포넌트.
const CommonSelectBox = <T extends SelectBox>({ data }: Props<T>) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [selectBoxData, setSelectBoxData] = useState<T[]>(data);
  const [selectedInfo, setSelectedInfo] = useState<string>("");
  const handleChange = (search: string) => {
    if (search !== "") {
      let tempData = selectBoxData.filter((item) => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setSelectBoxData(tempData);
    } else {
      setSelectBoxData(data);
    };
  };
  const handleSelected = (title: string) => {
    setSelectedInfo(title);
    setClicked(!clicked);
    handleChange("");
  };
  return (
    <View style={{position: "relative", zIndex: 9999}}>
      <SelectBoxButton
        handleClick={() => setClicked(!clicked)}
        selectedInfo={selectedInfo}
        clicked={clicked}
      />
      <SelectBoxList
        handleChange={handleChange}
        clicked={clicked}
        data={selectBoxData}
        handleSelected={handleSelected}
      />
    </View>
  );
};

export default CommonSelectBox;
