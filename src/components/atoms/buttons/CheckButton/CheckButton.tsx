import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { checkButtonStyles } from "./CheckButton.style";

interface Props {
  value: boolean;
  handlePress: () => void;
  label: string;
}

const CheckButton = ({ value, handlePress, label }: Props) => {
  return (
    <View style={checkButtonStyles.container}>
      {value ? (
        <TouchableOpacity
          style={checkButtonStyles.checkContainer}
          onPress={() => {
            handlePress();
          }}
        >
          <Image style={checkButtonStyles.check} source={require("../../../../assets/check.png")} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={checkButtonStyles.checkContainer}
          onPress={() => {
            handlePress();
          }}
        >
          <Image style={checkButtonStyles.check} source={require("../../../../assets/nonCheck.png")} />
        </TouchableOpacity>
      )}
      <Text style={checkButtonStyles.checkButtonLabel}>{label}</Text>
    </View>
  );
};

export default CheckButton;
