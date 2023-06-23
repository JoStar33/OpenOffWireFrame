import { Text } from "react-native";
import { colorBoxStyle } from "./ColorBox.style";

interface Props {
  label: string;
  fontColor: string;
  color: string;
}

const ColorBox = ({ label, fontColor, color }: Props) => {
  return (
    <Text
      style={{
        ...colorBoxStyle.container,
        color: fontColor,
        backgroundColor: color
      }}
    >
      {label}
    </Text>
  );
};

export default ColorBox;
