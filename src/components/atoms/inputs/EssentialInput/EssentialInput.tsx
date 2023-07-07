import PhoneAuthButton from "components/atoms/buttons/PhoneAuthButton/PhoneAuthButton";
import ErrorInputText from "components/atoms/texts/ErrorInputText/ErrorInputText";
import { Dispatch, SetStateAction } from "react";
import { Text, TextInput, View } from "react-native";
import { essentialInputStyles } from "./EssentialInput.style";

interface Props {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type: string;
  width?: number;
  maxLength?: number;
  keyboardType?: "default" | "number-pad";
  validation: (value: string) => string | undefined;
  handlePress?: () => void;
}

const EssentialInput = ({
  label,
  value,
  setValue,
  type,
  width = 350,
  keyboardType = "default",
  validation,
  handlePress = () => {},
  maxLength = 20,
}: Props) => {
  const handleChangeText = (
    value: string,
    onChange: Dispatch<SetStateAction<string>>
  ) => {
    value = value.trim();
    if (type === "phonenumber") {
      if (value.length > 13) return;
      onChange(
        value
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
      );
      return;
    }
    onChange(value);
  };
  return (
    <View style={{ ...essentialInputStyles.container, width: 350 }}>
      <View style={essentialInputStyles.phoneInputContainer}>
        <Text style={{ ...essentialInputStyles.label, width: width }}>
          {label}
        </Text>
        <View>
          <TextInput
            value={value}
            maxLength={maxLength}
            keyboardType={keyboardType}
            style={{
              ...essentialInputStyles.inputContainer,
              width: width,
              color: validation(value) ? "red" : "grey",
              borderColor: validation(value) ? "red" : "grey",
            }}
            onChangeText={(value) => handleChangeText(value, setValue)}
          />
          <ErrorInputText width={width} validation={validation} value={value} />
        </View>
      </View>
      {type === "phonenumber" && (
        <PhoneAuthButton
          label={"인증받기"}
          active={validation(value) || value.length < 2 ? false : true}
          handlePress={handlePress}
        />
      )}
    </View>
  );
};

export default EssentialInput;
