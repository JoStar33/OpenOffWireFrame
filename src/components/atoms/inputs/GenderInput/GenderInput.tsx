import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import React from "react";
import { View, Text } from "react-native";
import { FormValidateModel } from "types/apps/form";
import { genderInputStyles } from "./GenderInput.style";

interface Props {
  model: FormValidateModel;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
}

const GenderInput = ({ model, errors, control }: Props) => {
  return (
    <Controller
      control={control}
      name={model.name}
      rules={{
        required: model.required,
        validate: (value) => model.validate(value),
      }}
      render={({ field: { onChange, value } }) => (
        <View style={genderInputStyles.container}>
          <Text style={genderInputStyles.inputTitle}>성별</Text>
          <View style={genderInputStyles.genderButtonContainer}>
            {value === "남" ? (
              <ColorButton
                label={"남"}
                color={"black"}
                marginRight={20}
                backgroundColor={"#8B6FE7"}
                handleClick={() => onChange("")}
              />
            ) : (
              <ColorButton
                label={"남"}
                color={"black"}
                marginRight={20}
                backgroundColor={"#A4A4A4"}
                handleClick={() => onChange("남")}
              />
            )}
            {value === "여" ? (
              <ColorButton
                label={"여"}
                color={"black"}
                marginRight={20}
                backgroundColor={"#8B6FE7"}
                handleClick={() => onChange("")}
              />
            ) : (
              <ColorButton
                label={"여"}
                color={"black"}
                marginRight={20}
                backgroundColor={"#A4A4A4"}
                handleClick={() => onChange("여")}
              />
            )}
          </View>
          {errors[model.name] ? (
            <Text style={genderInputStyles.errorText}>
              {String(errors[model.name]?.message)}
            </Text>
          ) : null}
        </View>
      )}
    />
  );
};

export default GenderInput;
