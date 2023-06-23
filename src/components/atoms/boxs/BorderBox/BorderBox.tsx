import { Text } from "react-native";
import { borderBoxStyle } from "./BorderBox.style";

interface Props {
  label: string;
}

const BorderBox = ({ label }: Props) => {
  return <Text style={borderBoxStyle.label}>{label}</Text>;
};

export default BorderBox;
