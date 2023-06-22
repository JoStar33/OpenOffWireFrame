import { Text, View } from "react-native";
import { iconTextStyles } from "./IconText.style";

interface Props {
  icon: React.ReactElement;
  label: string;
}

const IconText = ({icon, label}: Props) => {
  return (
    <View style={iconTextStyles.container}>
      {
        icon
      }
      <Text style={iconTextStyles.text}>
        {
          label
        }
      </Text>
    </View>
  );
};

export default IconText;