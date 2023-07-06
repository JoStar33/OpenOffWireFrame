import { NavigationProp, useNavigation } from "@react-navigation/native";
import AuthorizeFlowButton from "components/atoms/buttons/AuthorizeFlowButton/AuthorizeFlowButton";
import CheckButton from "components/atoms/buttons/CheckButton/CheckButton";
import { UserInfoStatus } from "constants/join";
import { AuthorizeMenu } from "constants/menu";
import { Dispatch, useState } from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "types/apps/menu";
import { Action } from "types/join";
import { agreeToTermScreenStyles } from "./AgreeToTermScreen.style";

interface AgreeList {
  allAgree: boolean;
  termToTeenager: boolean;
  termToUse: boolean;
  termToPrivacy: boolean;
  termToMarketing: boolean;
}

interface Props {
  dispatch: Dispatch<Action>;
}

const AgreeToTermScreen = ({ dispatch }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [term, setTerm] = useState<AgreeList>({
    allAgree: false,
    termToTeenager: false,
    termToUse: false,
    termToPrivacy: false,
    termToMarketing: false,
  });
  const validateAllCheck = () => {
    if (
      !(
        term.termToMarketing &&
        term.termToPrivacy &&
        term.termToTeenager &&
        term.termToUse
      )
    ) {
      setTerm((term) => {
        return { ...term, allAgree: false };
      });
    }
  };
  return (
    <View style={agreeToTermScreenStyles.container}>
      <Text style={agreeToTermScreenStyles.titleText}>
        서비스 이용 약관에 동의해 주세요.
      </Text>
      <View>
        <CheckButton
          value={term.allAgree}
          handlePress={() => {
            setTerm({
              allAgree: !term.allAgree,
              termToTeenager: !term.allAgree,
              termToUse: !term.allAgree,
              termToPrivacy: !term.allAgree,
              termToMarketing: !term.allAgree,
            });
          }}
          label={"네, 모두 동의합니다."}
        />
        <CheckButton
          value={term.termToTeenager}
          handlePress={() => {
            setTerm((term) => {
              return { ...term, termToTeenager: !term.termToTeenager };
            });
            validateAllCheck();
          }}
          label={"(필수) 만 14세 이상입니다."}
        />
        <CheckButton
          value={term.termToUse}
          handlePress={() => {
            setTerm((term) => {
              return { ...term, termToUse: !term.termToUse };
            });
            validateAllCheck();
          }}
          label={"(필수) 서비스 이용약관"}
        />
        <CheckButton
          value={term.termToPrivacy}
          handlePress={() => {
            setTerm((term) => {
              return { ...term, termToPrivacy: !term.termToPrivacy };
            });
            validateAllCheck();
          }}
          label={"(필수) 개인정보 수집 이용"}
        />
        <CheckButton
          value={term.termToMarketing}
          handlePress={() => {
            setTerm((term) => {
              return { ...term, termToMarketing: !term.termToMarketing };
            });
            validateAllCheck();
          }}
          label={"(선택) 마케팅 정보 수신동의"}
        />
      </View>
      {term.termToPrivacy && term.termToTeenager && term.termToUse ? (
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

export default AgreeToTermScreen;
