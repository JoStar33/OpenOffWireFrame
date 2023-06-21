import { Text, View } from "react-native";
import { eventCardStyles } from "./IconText.style";

interface Props {
  icon: React.ReactElement;
  label: string;
}

const IconText = ({icon, label}: Props) => {
  return (
    <View style={eventCardStyles.container}>
      {
        icon
      }
      <Text style={eventCardStyles.text}>
        {
          label
        }
      </Text>
    </View>
  );
};

export default IconText;