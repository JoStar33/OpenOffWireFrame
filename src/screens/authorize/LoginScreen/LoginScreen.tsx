import JoinButton from "components/atoms/buttons/JoinButton/JoinButton";
import LoginButton from "components/atoms/buttons/LoginButton/LoginButton";
import LoginInput from "components/atoms/inputs/LoginInput/LoginInput";
import SocialLoginButtonGroup from "components/molecules/groups/SocialLoginButtonGroup/SocialLoginButtonGroup";
import { useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { validateEmail, validatePassword } from "utils/validate";
import { loginScreenStyles } from "./LoginScreen.style";

const LoginScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <View style={loginScreenStyles.container}>
      <Image style={loginScreenStyles.logo} source={require("../../../assets/logo.png")}/>
      <LoginInput
        label={"이메일"}
        name={"emailAddress"}
        type={"emailAddress"}
        validation={validateEmail}
        errors={errors}
        control={control}
      />
      <LoginInput
        label={"비밀번호"}
        name={"password"}
        type={"password"}
        validation={validatePassword}
        errors={errors}
        control={control}
      />
      <LoginButton
        handlePress={handleSubmit((data) => console.log(data))}
      />
      <Text style={{margin: 30}}>또는</Text>
      <SocialLoginButtonGroup />
      <JoinButton/>
    </View>
  );
};

export default LoginScreen;
