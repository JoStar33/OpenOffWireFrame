import { NavigationProp, useNavigation } from "@react-navigation/native";
import AuthorizeFlowButton from "components/atoms/buttons/AuthorizeFlowButton/AuthorizeFlowButton";
import BaseInfoInput from "components/atoms/inputs/BaseInfoInput/BaseInfoInput";
import GenderInput from "components/atoms/inputs/GenderInput/GenderInput";
import { UserInfoStatus } from "constants/join";
import { AuthorizeMenu } from "constants/menu";
import { Dispatch, useState } from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "types/apps/menu";
import { Action } from "types/join";
import { validateBirthday, validateName } from "utils/validate";
import { userInfoScreenStyles } from "./UserInfoScreen.style";

interface Props {
  dispatch: Dispatch<Action>;
}

const UserInfoScreen = ({ dispatch }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("2000-00-00");
  const [gender, setGender] = useState<string>("남");
  return (
    <View style={userInfoScreenStyles.container}>
      <View style={userInfoScreenStyles.titleContainer}> 
        <Text style={userInfoScreenStyles.title}>
          오픈오프 이용을 위해 정보를 입력해주세요.
        </Text>
      </View>
      <BaseInfoInput
        label={"이름"}
        value={name}
        width={350}
        setValue={setName}
        validation={validateName}
      />
      <View style={{ flexDirection: "row", width: 360, alignItems: "center" }}>
        <BaseInfoInput
          label={"생일"}
          value={birth}
          width={165}
          setValue={setBirth}
          validation={validateBirthday}
          focusMode={true}
        />
        <GenderInput value={gender} setValue={setGender} />
      </View>
      {!validateName(name) && name.length > 1 ? (
        <AuthorizeFlowButton
          handlePress={() => {
            dispatch({ type: UserInfoStatus.SET_AGREE_TO_TERM, value: "Y" });
            navigation.navigate(AuthorizeMenu.InterestField);
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

export default UserInfoScreen;
