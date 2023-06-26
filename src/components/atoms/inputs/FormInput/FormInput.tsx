import { Control, Controller, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { FormModel } from "types/apps/form";
import { formInputStyles } from "./FormInput.style";

interface Props {
  model: FormModel;
  control: Control<FieldValues, any>;
}

const FormInput = ({ model, control }: Props) => {
  return (
    <Controller
      control={control}
      name={model.name}
      render={({ field: { onChange, value } }) => (
        <View style={formInputStyles.inputContainer}>
          <Text style={formInputStyles.inputTitle}>
            {model.label}
          </Text>
          <TextInput
            id={model.name}
            secureTextEntry={model.type === "password"}
            placeholder={model.name}
            style={formInputStyles.input}
            value={value}
            onChangeText={(value) => onChange(value)}
          />
        </View>
      )}
    ></Controller>
  );
};

export default FormInput;
