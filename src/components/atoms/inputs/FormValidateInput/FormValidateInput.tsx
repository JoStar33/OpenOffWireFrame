import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { FormValidateModel } from "types/apps/form";
import { formValidateInputStyles } from "./FormValidateInput.style";

interface Props {
  model: FormValidateModel;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  color: "black" | "white";
}

const FormValidateInput = ({ model, errors, control, color }: Props) => {
  return (
    <Controller
      control={control}
      name={model.name}
      rules={{
        required: model.required,
        validate: (value) => model.validate(value),
      }}
      render={({ field: { onChange, value } }) => (
        <View style={formValidateInputStyles.inputContainer}>
          <View>
            <Text
              style={{
                ...formValidateInputStyles.inputTitle,
                color: color === "black" ? "white" : "black",
              }}
            >
              {model.label}
            </Text>
          </View>
          <TextInput
            id={model.name}
            secureTextEntry={model.type === "password"}
            style={{
              ...formValidateInputStyles.input,
              backgroundColor: color === "black" ? "#D9D9D9" : "#A4A4A4",
              color: "black",
            }}
            value={value}
            onChangeText={(value) => {
              value = value.trim();
              if (model.name === "phonenumber") {
                if(value.length > 13)
                  return;
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
          {errors[model.name] ? (
            <Text style={formValidateInputStyles.errorText}>
              {String(errors[model.name]?.message)}
            </Text>
          ) : null}
        </View>
      )}
    ></Controller>
  );
};

export default FormValidateInput;
