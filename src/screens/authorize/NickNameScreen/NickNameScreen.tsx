import { NavigationProp, useNavigation } from "@react-navigation/native";
import AuthorizeFlowButton from "components/atoms/buttons/AuthorizeFlowButton/AuthorizeFlowButton";
import EssentialInput from "components/atoms/inputs/EssentialInput/EssentialInput";
import { UserInfoStatus } from "constants/join";
import { AuthorizeMenu } from "constants/menu";
import { Dispatch, useState } from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "types/apps/menu";
import { Action } from "types/join";
import { validateName } from "utils/validate";
import { nickNameScreenStyles } from "./NickNameScreen.style";

interface Props {
  dispatch: Dispatch<Action>;
}

const NickNameScreen = ({ dispatch }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [nickname, setNickname] = useState<string>("");
  return (
    <View style={nickNameScreenStyles.container}>
      <View style={nickNameScreenStyles.titleContainer}>
        <Text style={nickNameScreenStyles.title}>오픈오프에서 사용할</Text>
        <Text style={nickNameScreenStyles.title}>닉네임을 입력해주세요.</Text>
      </View>
      <EssentialInput
        validation={validateName}
        label="닉네임"
        maxLength={5}
        value={nickname}
        setValue={setNickname}
        type={"nickname"}
      />
      {!validateName(nickname) && nickname.length > 1 ? (
        <AuthorizeFlowButton
          handlePress={() => {
            dispatch({ type: UserInfoStatus.SET_AGREE_TO_TERM, value: "Y" });
            navigation.navigate(AuthorizeMenu.UserInfo);
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

export default NickNameScreen;
