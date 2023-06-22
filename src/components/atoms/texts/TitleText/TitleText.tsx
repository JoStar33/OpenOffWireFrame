import { Text } from "react-native";
import { titleTextStyles } from "./TitleText.style";

interface Props {
  label: string;
}

const TitleText = ({ label }: Props) => {
  return (
    <Text style={titleTextStyles.text}>
      {
        label
      }
    </Text>
  );
};

export default TitleText;