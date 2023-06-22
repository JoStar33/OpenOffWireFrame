import { TouchableOpacity } from "react-native";
import { iconButtonStyles } from "./IconButton.style";

interface Props {
  icon: React.ReactElement;
}

const IconButton = ({icon}: Props) => {
  return (
    <TouchableOpacity style={iconButtonStyles.container}>
      {
        icon
      }
    </TouchableOpacity>
  );
};

export default IconButton;