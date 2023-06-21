import { Image, Text, View } from "react-native";
import { Event } from "types/event";
import { eventCardStyles } from "./EventCard.style";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <View style={eventCardStyles.container}>
      <Image source={{ uri: event.image }} />
      <View style={eventCardStyles.eventInfo}>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={eventCardStyles.actionContainer}></View>
    </View>
  );
};

export default EventCard;
