import ErrorInputText from "components/atoms/texts/ErrorInputText/ErrorInputText";
import { Dispatch, SetStateAction, useState } from "react";
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { TextInput } from "react-native-gesture-handler";
import { baseInfoInputStyles } from "./BaseInfoInput.style";

interface Props {
  label: string;
  value: string;
  width: number;
  setValue: Dispatch<SetStateAction<string>>;
  validation: (value: string) => string | undefined;
  focusMode?: boolean;
}

const BaseInfoInput = ({
  label,
  value,
  setValue,
  validation,
  width,
  focusMode = false,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const resetValue = (event: GestureResponderEvent) => {
    event.stopPropagation();
    setValue(focusMode ? "2000-00-00" : "");
  };
  const leftPad = (value: number) => {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  };

  const dateFormatter = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${date.getFullYear()}-${leftPad(month)}-${leftPad(day)}`;
  };
  return (
    <>
      <View style={{ ...baseInfoInputStyles.container, width: width }}>
        <Text style={{ ...baseInfoInputStyles.inputTitle, width: width }}>
          {label}
        </Text>
        <TextInput
          onFocus={
            focusMode
              ? () => {
                  setOpen(true);
                }
              : () => {}
          }
          value={value}
          style={{
            ...baseInfoInputStyles.input,
            width: width,
            color: validation(value) ? "red" : "#FFF",
            borderColor: validation(value) ? "red" : "#9B84F8",
          }}
          onChangeText={(value) => setValue(value)}
        />
        <View
          style={{ ...baseInfoInputStyles.resetPosition, left: width - 18 }}
        >
          <TouchableOpacity onPress={resetValue}>
            <Image
              style={baseInfoInputStyles.resetImage}
              source={require("../../../../assets/xbutton.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <ErrorInputText validation={validation} value={value} width={width} />
      </View>
      {focusMode && (
        <DatePicker
          modal
          title={"날짜를 선택해주세요."}
          mode="date"
          textColor="white"
          theme="dark"
          open={open}
          date={new Date(value)}
          onConfirm={(date) => {
            setOpen(false);
            setValue(dateFormatter(date));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
};

export default BaseInfoInput;
