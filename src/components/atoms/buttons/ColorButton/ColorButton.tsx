import { Text, TouchableOpacity } from "react-native";
import { colorButtonStyles } from "./ColorButton.style";

interface Props {
  label: string;
  color: string;
  marginRight?: number;
  marginLeft?: number;
  backgroundColor: string;
  handleClick: () => void;
}

const ColorButton = ({ label, color, backgroundColor, handleClick, marginRight, marginLeft }: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...colorButtonStyles.container,
        backgroundColor: backgroundColor,
        marginRight: marginRight ?? 0,
        marginLeft: marginLeft ?? 0,
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
