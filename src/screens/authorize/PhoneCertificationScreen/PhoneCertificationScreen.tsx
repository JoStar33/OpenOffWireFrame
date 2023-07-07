import { NavigationProp, useNavigation } from "@react-navigation/native";
import AuthorizeFlowButton from "components/atoms/buttons/AuthorizeFlowButton/AuthorizeFlowButton";
import EssentialInput from "components/atoms/inputs/EssentialInput/EssentialInput";
import { UserInfoStatus } from "constants/join";
import { AuthorizeMenu } from "constants/menu";
import { Dispatch, useState } from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "types/apps/menu";
import { Action } from "types/join";
import { validateAuthNumber, validatePhoneNumber } from "utils/validate";
import { phoneCertificationScreenStyles } from "./PhoneCertificationScreen.style";

interface Props {
  dispatch: Dispatch<Action>;
}

const PhoneCertificationScreen = ({ dispatch }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [authnumber, setAuthnumber] = useState<string>("");
  const handlePress = () => {
    console.log(phonenumber);
  };
  return (
    <View style={phoneCertificationScreenStyles.container}>
      <Text style={phoneCertificationScreenStyles.title}>
        휴대폰 인증을 해주세요.
      </Text>
      <EssentialInput
        validation={validatePhoneNumber}
        label="휴대폰 번호"
        width={260}
        keyboardType={"number-pad"}
        value={phonenumber}
        setValue={setPhonenumber}
        type={"phonenumber"}
        handlePress={handlePress}
      />
      <EssentialInput
        validation={validateAuthNumber}
        label="인증번호"
        keyboardType={"number-pad"}
        value={authnumber}
        setValue={setAuthnumber}
        type={"authnumber"}
      />
      {!validatePhoneNumber(phonenumber) &&
      phonenumber.length > 1 &&
      authnumber.length > 1 &&
      !validateAuthNumber(authnumber) ? (
        <AuthorizeFlowButton
          handlePress={() => {
            dispatch({ type: UserInfoStatus.SET_AGREE_TO_TERM, value: "Y" });
            navigation.navigate(AuthorizeMenu.NickName);
          }}
          color={"#9B84F8"}
          fontColor={"#FFF"}
          label={"확인"}
        />
      ) : (
        <AuthorizeFlowButton
          handlePress={() => {}}
          color={"#434343"}
          fontColor={"#B9B9B9"}
          label={"확인"}
        />
      )}
    </View>
  );
};

export default PhoneCertificationScreen;
