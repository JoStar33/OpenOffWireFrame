import { FlatList, View } from "react-native";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import RadioButton from "react-native-radio-buttons-group/lib/RadioButton";
import { vw } from "rxn-units";
import { radioButtonGroupStyles } from "./RadioButtonGroup.style";

interface Props {
  radioElements: RadioButtonProps[];
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedId: string | undefined;
}

const RadioButtonGroup = ({
  radioElements,
  setSelectedId,
  selectedId,
}: Props) => {
  return (
    <View style={radioButtonGroupStyles.container}>
      <FlatList
        style={{width: vw(100)}}
        numColumns={2}
        data={radioElements}
        renderItem={(radio) => (
          <RadioButton
            containerStyle={{width: vw(45)}}
            labelStyle={{color: "black"}}
            label={radio.item.label}
            id={radio.item.id}
            color="black"
            selected={selectedId === radio.item.id}
            onPress={setSelectedId}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default RadioButtonGroup;
