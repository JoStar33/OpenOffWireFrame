import { Text, TouchableOpacity } from "react-native";
import { colorButtonStyles } from "./ColorButton.style";

interface Props {
  label: string;
  color: string;
  backgroundColor: string;
  handleClick: () => void;
}

const ColorButton = ({ label, color, backgroundColor, handleClick }: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...colorButtonStyles.container,
        backgroundColor: backgroundColor,
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
