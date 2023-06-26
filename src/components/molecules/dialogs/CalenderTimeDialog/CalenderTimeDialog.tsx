import { Modal, View } from "react-native";
import { Calendar } from "react-native-calendars";

const CalenderTimeDialog = () => {
  return (
    <Modal>
      <View>
        <Calendar/>
      </View>
    </Modal>
  );
};

export default CalenderTimeDialog;