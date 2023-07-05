import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Organizer } from 'types/organizer';
import { organizerButtonStyles } from './OrganizerButton.style';

interface Props {
  organizer: Organizer;
}

const OrganizerButton = ({ organizer }: Props) => {
  return (
    <View style={organizerButtonStyles.container}>
      <TouchableOpacity style={organizerButtonStyles.button}/>
      <Text style={organizerButtonStyles.text}>{organizer.label}</Text>
    </View>
  );
};

export default OrganizerButton;