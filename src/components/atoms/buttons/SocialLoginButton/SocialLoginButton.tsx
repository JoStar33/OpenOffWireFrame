import { Text, TouchableOpacity } from "react-native";
import { socialLoginButtonStyles } from "./SocialLoginButton.style";

interface Props {
  label: string;
  color: string;
  handlePress: () => void;
}

const SocialLoginButton = ({ label, color, handlePress }: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ ...socialLoginButtonStyles.container, backgroundColor: color }}
    >
      <Text style={{ fontSize: 8, color: "black" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
