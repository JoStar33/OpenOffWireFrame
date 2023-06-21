import { Text, View } from "react-native";
import { phoneCoverStyles } from "./PhoneCover.style";

interface Props {
  children: JSX.Element
}

const PhoneCover = ({ children }: Props) => {
  return (
    <View style={phoneCoverStyles.viewer}>
      <Text>350 x 800</Text>
      <View style={phoneCoverStyles.container}>
        {
          children
        }
      </View>
    </View>
  );
};

export default PhoneCover;