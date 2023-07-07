import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";
import { genderInputStyles } from "./GenderInput.style";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const GenderInput = ({ value, setValue }: Props) => {
  return (
    <View style={genderInputStyles.container}>
      <Text style={genderInputStyles.inputTitle}>성별</Text>
      <View style={genderInputStyles.genderButtonContainer}>
        {value === "남" ? (
          <ColorButton
            label={"남"}
            color={"#FFF"}
            marginRight={10}
            backgroundColor={"#9B84F8"}
            handleClick={() => {}}
          />
        ) : (
          <ColorButton
            label={"남"}
            color={"#9B84F8"}
            marginRight={10}
            borderColor="#9B84F8"
            backgroundColor={"transparent"}
            handleClick={() => setValue("남")}
          />
        )}
        {value === "여" ? (
          <ColorButton
            label={"여"}
            color={"#FFF"}
            marginRight={10}
            backgroundColor={"#9B84F8"}
            handleClick={() => {}}
          />
        ) : (
          <ColorButton
            label={"여"}
            color={"#9B84F8"}
            marginRight={10}
            borderColor="#9B84F8"
            backgroundColor={"transparent"}
            handleClick={() => setValue("여")}
          />
        )}
      </View>
    </View>
  );
};

export default GenderInput;
