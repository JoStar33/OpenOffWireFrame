import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { loginInputStyles } from "./LoginInput.style";

interface Props {
  label: string;
  name: string;
  type: string;
  validation: (value: string) => string | undefined;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
}

const LoginInput = ({
  label,
  name,
  type,
  validation,
  errors,
  control,
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
        <View style={loginInputStyles.container}>
          <Text style={loginInputStyles.inputTitle}>{label}</Text>
          <TextInput
            id={name}
            value={value}
            placeholder={`${
              type === "password" ? "비밀번호" : "이메일"
            }을 입력해주세요.`}
            style={{
              ...loginInputStyles.input,
              color: errors[name] ? "red" : "grey",
              borderColor: errors[name] ? "red" : "grey",
            }}
            secureTextEntry={type === "password"}
            onChangeText={(value) => {
              value = value.trim();
              onChange(value);
            }}
          ></TextInput>
          {errors[name] ? (
            <Text style={loginInputStyles.errorText}>
              {String(errors[name]?.message)}
            </Text>
          ) : null}
        </View>
      )}
    />
  );
};

export default LoginInput;
