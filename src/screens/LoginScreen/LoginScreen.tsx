import { Text, View } from "react-native";
import { loginScreenStyles } from "./LoginScreen.style";

const LoginScreen = () => {
  return (
    <View style={loginScreenStyles.container}>
      <Text style={loginScreenStyles.text}>로그인</Text>
    </View>
  );
};

export default LoginScreen;
