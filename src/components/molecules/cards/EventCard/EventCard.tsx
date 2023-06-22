import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import IconButton from "components/atoms/buttons/IconButton/IconButton";
import IconText from "components/atoms/texts/IconText/IconText";
import TitleText from "components/atoms/texts/TitleText/TitleText";
import { Image, Text, View } from "react-native";
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
        <Text style={{color: "black"}}>{event.date}</Text>
        <TitleText label={event.name}/>
        <IconText icon={<FeatherIcon color={"black"} size={20} name="map-pin" />} label={"이벤트 장소"}/>
        <IconText icon={<FeatherIcon color={"black"} size={20} name="user" />} label={`${event.participant}명 참가 예정`}/>
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
