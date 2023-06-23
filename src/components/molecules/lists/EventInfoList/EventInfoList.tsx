import EventFieldBox from "components/atoms/boxs/BorderBox/BorderBox";
import IconText from "components/atoms/texts/IconText/IconText";
import TitleText from "components/atoms/texts/TitleText/TitleText";
import { useMemo } from "react";
import { Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Event } from "types/event";

interface Props {
  event: Event;
}

const EventInfoList = ({ event }: Props) => {
  const week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  const today = new Date().getDay();
  const todayLabel = week[today];
  const eventTime = useMemo<string>(() => {
    const timeNumber = parseInt(event.date.substring(11, 13));
    const formatTime = (time: number) => {
      if(time > 12)
        return time - 12;
      return time;
    }
    if(10 >= timeNumber && timeNumber > 6) {
      return `아침 ${timeNumber}시`
    }
    if(16 >= timeNumber && timeNumber > 10) {
      return `낮 ${formatTime(timeNumber)}시`
    }
    if(24 > timeNumber && timeNumber > 16) {
      return `저녁 ${formatTime(timeNumber)}시`
    }
    return `새벽 ${formatTime(timeNumber)}시`
  }, [event])
  return (
    <>
      <EventFieldBox label={event.eventType} />
      <Text style={{ color: "black" }}>{`${parseInt(
        event.date.substring(5, 7)
      )}/${parseInt(event.date.substring(8, 10))} ${todayLabel} ${eventTime}`}</Text>
      <TitleText label={event.name} />
      <IconText
        icon={<FeatherIcon color={"black"} size={20} name="map-pin" />}
        label={"이벤트 장소"}
      />
      <IconText
        icon={<FeatherIcon color={"black"} size={20} name="user" />}
        label={`${event.participant}명 참가 예정`}
      />
    </>
  );
};

export default EventInfoList;
