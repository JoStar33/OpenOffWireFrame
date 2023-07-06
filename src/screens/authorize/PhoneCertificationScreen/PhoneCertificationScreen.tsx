import { NavigationProp, useNavigation } from "@react-navigation/native";
import AuthorizeFlowButton from "components/atoms/buttons/AuthorizeFlowButton/AuthorizeFlowButton";
import EssentialInput from "components/atoms/inputs/EssentialInput/EssentialInput";
import { UserInfoStatus } from "constants/join";
import { AuthorizeMenu } from "constants/menu";
import { Dispatch } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { RootStackParamList } from "types/apps/menu";
import { Action } from "types/join";
import { validatePhoneNumber } from "utils/validate";
import { phoneCertificationScreenStyles } from "./PhoneCertificationScreen.style";

interface Props {
  dispatch: Dispatch<Action>;
}

const PhoneCertificationScreen = ({dispatch}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues
  } = useForm<FieldValues>({
    defaultValues: {
      phonenumber: '',
      authnumber: '',
    },
  });
  const handleCertificate = () => {
    console.log(getValues().phonenumber)
  }
  return (
    <View style={phoneCertificationScreenStyles.container}>
      <Text style={phoneCertificationScreenStyles.title}>
        휴대폰 인증을 해주세요.
      </Text>
      <EssentialInput
        validation={validatePhoneNumber}
        label="휴대폰 번호"
        name="phonenumber"
        width={260}
        control={control}
        errors={errors}
        handlePress={handleCertificate}
      />
      <EssentialInput
        validation={validatePhoneNumber}
        label="인증번호"
        name="authnumber"
        width={350}
        control={control}
        errors={errors}
      />
      {getValues().phonenumber && getValues().authnumber ? (
        <AuthorizeFlowButton
          handlePress={() => {
            dispatch({ type: UserInfoStatus.SET_AGREE_TO_TERM, value: "Y" });
            navigation.navigate(AuthorizeMenu.PhoneCertification);
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
