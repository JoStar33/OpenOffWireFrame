import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { phoneAuthButtonStyles } from "./PhoneAuthButton.style";

interface Props {
  label: string;
  active: boolean;
  handlePress: () => void;
}

const PhoneAuthButton = ({ label, active, handlePress }: Props) => {
  return (
    <View style={phoneAuthButtonStyles.container}>
      {active ? (
        <TouchableOpacity style={phoneAuthButtonStyles.activeButton} onPress={handlePress}>
          <Text style={phoneAuthButtonStyles.activeLabel}>{label}</Text>
        </TouchableOpacity>
      ) : (
        <View style={phoneAuthButtonStyles.nonActiveButton}>
          <Text style={phoneAuthButtonStyles.nonActiveLabel}>{label}</Text>
        </View>
      )}
    </View>
  );
};

export default PhoneAuthButton;
