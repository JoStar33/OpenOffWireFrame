import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import IconButton from "components/atoms/buttons/IconButton/IconButton";
import EventInfoList from "components/molecules/lists/EventInfoList/EventInfoList";
import { Image, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import { Event } from "types/event";
import { eventCardStyles } from "./EventCard.style";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <View style={eventCardStyles.container}>
      <Image style={eventCardStyles.image} source={{ uri: event.image }} />
      <View style={eventCardStyles.eventInfo}>
        <EventInfoList event={event}/>
      </View>
      <View style={eventCardStyles.actionContainer}>
        <ColorButton label={"신청하기"} color={"white"} backgroundColor={"#8B6FE7"} handleClick={() => {
          console.log("이벤트 신청하기")
        }}/>
        <View style={eventCardStyles.subActionContainer}>
          <IconButton icon={<FeatherIcon size={25} name="share-2" color={"black"}/>}/>
          <IconButton icon={<FontistoIcon size={23} name="heart-alt" color={"black"}/>}/>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
