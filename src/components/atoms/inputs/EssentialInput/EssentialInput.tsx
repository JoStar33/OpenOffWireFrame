import PhoneAuthButton from "components/atoms/buttons/PhoneAuthButton/PhoneAuthButton";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { essentialInputStyles } from "./EssentialInput.style";

interface Props {
  label: string;
  name: string;
  width: number;
  validation: (value: string) => string | undefined;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  handlePress?: () => void;
}

const EssentialInput = ({
  label,
  name,
  width,
  control,
  errors,
  validation,
  handlePress,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
        validate: (value) => validation(value),
      }}
      render={({ field: { onChange, value } }) => (
        <View style={essentialInputStyles.container}>
          <Text style={{ ...essentialInputStyles.label, width: width }}>
            {label}
          </Text>
          <View style={essentialInputStyles.phoneInputContainer}>
            <TextInput
              value={value}
              style={{
                ...essentialInputStyles.inputContainer,
                width: width,
                color: errors[name] ? "red" : "grey",
                borderColor: errors[name] ? "red" : "grey",
              }}
              onChangeText={(value) => {
                value = value.trim();
                if (name === "phonenumber") {
                  if (value.length > 13) return;
                  onChange(
                    value
                      .replace(/[^0-9]/g, "")
                      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
                  );
                  return;
                }
                onChange(value);
              }}
            />
            {name === "phonenumber" && (
              <PhoneAuthButton
                label={"인증받기"}
                active={validation(value) ? false : true}
                handlePress={async () => handlePress}
              />
            )}
          </View>
          {errors[name] ? (
            <Text style={essentialInputStyles.errorText}>
              {String(errors[name]?.message)}
            </Text>
          ) : null}
        </View>
      )}
    />
  );
};

export default EssentialInput;
