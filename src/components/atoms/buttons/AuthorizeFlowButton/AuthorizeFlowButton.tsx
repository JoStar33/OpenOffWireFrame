import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { authorizeFlowButtonStyles } from './AuthorizeFlowButton.style';

interface Props {
  color: string;
  fontColor: string;
  label: string;
  handlePress: () => void;
}

const AuthorizeFlowButton = ({fontColor, color, label, handlePress}: Props) => {
  return (
    <View style={authorizeFlowButtonStyles.absolutePosition}>
      <TouchableOpacity onPress={handlePress} style={{...authorizeFlowButtonStyles.container, backgroundColor: color}}>
        <Text style={{...authorizeFlowButtonStyles.label, color: fontColor}}>
          {
            label
          }
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthorizeFlowButton;