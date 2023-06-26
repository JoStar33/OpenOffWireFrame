import { FlatList, View, Text } from "react-native";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import RadioButton from "react-native-radio-buttons-group/lib/RadioButton";
import { vw } from "rxn-units";
import { radioButtonGroupStyles } from "./RadioButtonGroup.style";
import { FormValidateModel } from "types/apps/form";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

interface Props {
  radioElements: RadioButtonProps[];
  model: FormValidateModel;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
}

const RadioButtonGroup = ({ model, errors, control, radioElements }: Props) => {
  return (
    <Controller
      control={control}
      name={model.name}
      rules={{
        required: model.required,
        validate: (value) => model.validate(value),
      }}
      render={({ field: { onChange, value } }) => (
        <View style={radioButtonGroupStyles.container}>
          <Text style={radioButtonGroupStyles.title}>{model.label}</Text>
          <FlatList
            style={{ width: vw(100) }}
            numColumns={2}
            data={radioElements}
            renderItem={(radio) => (
              <RadioButton
                containerStyle={{ width: vw(45) }}
                labelStyle={{ color: "white" }}
                label={radio.item.label}
                id={radio.item.id}
                color="white"
                selected={value === radio.item.id}
                onPress={(id: string) => onChange(id)}
              />
            )}
          ></FlatList>
          {errors[model.name] ? (
            <Text style={radioButtonGroupStyles.errorText}>
              {String(errors[model.name]?.message)}
            </Text>
          ) : null}
        </View>
      )}
    />
  );
};

export default RadioButtonGroup;
