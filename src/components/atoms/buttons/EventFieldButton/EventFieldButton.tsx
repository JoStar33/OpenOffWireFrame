import { Text, TouchableOpacity } from "react-native";
import { eventFieldButton } from "./EventFieldButton.style";

interface Props {
  isDark: boolean;
  label: string;
  handlePress: () => void;
}

const EventFieldButton = ({ isDark, label, handlePress }: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...eventFieldButton.container,
        backgroundColor: !isDark ? "#D9D9D9" : "#161616",
      }}
      onPress={handlePress}
    >
      <Text style={{ color: !isDark ? "black" : "#FFF" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default EventFieldButton;
