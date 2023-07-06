import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loginButtonStyles } from "./LoginButton.style";

interface Props {
  handlePress: () => void;
}

const LoginButton = ({ handlePress }: Props) => {
  return (
    <TouchableOpacity
      onPress={(handlePress)}
      style={loginButtonStyles.container}
      hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
    >
      <Text style={loginButtonStyles.text}>로그인</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
