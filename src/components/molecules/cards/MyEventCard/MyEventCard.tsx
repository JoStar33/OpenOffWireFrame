import DDayText from 'components/atoms/texts/DDayText/DDayText';
import EventInfoList from 'components/molecules/lists/EventInfoList/EventInfoList';
import { TouchableOpacity, View } from 'react-native';
import { Event } from 'types/event';
import { myEventCardStyles } from './MyEventCard.style';

interface Props {
  event: Event;
  handlePress: () => void;
}

const MyEventCard = ({ event, handlePress }: Props) => {
  return (
    <TouchableOpacity style={myEventCardStyles.container} onPress={handlePress}>
      <View style={myEventCardStyles.eventInfoContainer}>
        <EventInfoList event={event}/>
      </View>
      <DDayText date={event.date}/>
    </TouchableOpacity>
  );
};

export default MyEventCard;