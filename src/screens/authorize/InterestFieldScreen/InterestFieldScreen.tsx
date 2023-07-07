import FieldButtonGroup from "components/molecules/groups/FieldButtonGroup/FieldButtonGroup";
import { interestField } from "data/lists/interestField";
import { Dispatch, useState } from "react";
import { Image, Text, View } from "react-native";
import { Field } from "types/apps/group";
import { Action } from "types/join";
import { interestFieldScreenStyles } from "./InterestFieldScreen.style";

interface Props {
  dispatch: Dispatch<Action>;
}

const InterestFieldScreen = ({ dispatch }: Props) => {
  const [fields, setFields] = useState<Field[]>(interestField);
  return (
    <View style={interestFieldScreenStyles.container}>
      <Text style={interestFieldScreenStyles.title}>
        관심 분야를 설정해주세요.
      </Text>
      <Image
        style={interestFieldScreenStyles.fieldInfomation}
        source={require("../../../assets/joinInformation.png")}
      />
      <FieldButtonGroup fields={fields} setFields={setFields} />
    </View>
  );
};

export default InterestFieldScreen;
