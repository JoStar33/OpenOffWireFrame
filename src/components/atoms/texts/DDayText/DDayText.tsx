import { useMemo } from "react";
import { Text } from "react-native";
import { dDayTextStyles } from "./DDayText.style";

interface Props {
  date: string;
}

const DDayText = ({ date }: Props) => {
  const dDay = useMemo<string>(() => {
    const today = new Date();
    const deadlineDate = new Date(date + ":00");
    let calculateDate = today.getTime() - deadlineDate.getTime();
    calculateDate = Math.ceil(calculateDate / (1000 * 60 * 60 * 24));
    if(calculateDate > 0) {
      return `+${calculateDate}`;
    }
    return String(calculateDate);
  }, [date]);
  return <Text style={dDayTextStyles.text}>D{dDay}</Text>;
};

export default DDayText;
