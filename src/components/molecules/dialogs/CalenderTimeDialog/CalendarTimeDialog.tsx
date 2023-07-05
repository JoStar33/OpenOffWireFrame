import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import { Modal, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { calendarTimeDialogStyles } from "./CalendarTimeDialog.style";

interface Props {
  dialogShow: boolean;
  dialogText: string;
  handleDialog: () => void;
}

const CalendarTimeDialog = ({
  dialogShow,
  dialogText,
  handleDialog,
}: Props) => {
  return (
    <Modal
      style={calendarTimeDialogStyles.modalView}
      animationType={"slide"}
      transparent={true}
      visible={dialogShow}
    >
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <View style={calendarTimeDialogStyles.centeredView}>
          <Text>{dialogText}</Text>
          <Calendar style={calendarTimeDialogStyles.calendar}/>
          <ColorButton
            label={"닫기"}
            color={"white"}
            backgroundColor={"#8B6FE7"}
            handleClick={handleDialog}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CalendarTimeDialog;
