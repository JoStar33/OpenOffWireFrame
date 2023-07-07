import { Text, TouchableOpacity } from "react-native";
import { colorButtonStyles } from "./ColorButton.style";

interface Props {
  label: string;
  color: string;
  marginRight?: number;
  marginLeft?: number;
  marginBottom?: number;
  borderColor?: string;
  backgroundColor: string;
  handleClick: () => void;
}

const ColorButton = ({ label, color, backgroundColor, handleClick, marginRight, marginLeft, marginBottom, borderColor = "transparent" }: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...colorButtonStyles.container,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        marginRight: marginRight ?? 0,
        marginLeft: marginLeft ?? 0,
        marginBottom: marginBottom ?? 0
      }}
      onPress={handleClick}
    >
      <Text style={{ ...colorButtonStyles.labelText, color: color }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ColorButton;
