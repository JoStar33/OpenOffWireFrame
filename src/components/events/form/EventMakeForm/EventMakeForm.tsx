import FormValidateInput from "components/atoms/inputs/FormValidateInput/FormValidateInput";
import RadioButtonGroup from "components/molecules/groups/RadioButtonGroup/RadioButtonGroup";
import { organizerCategory } from "data/forms/organizerCategory";
import React from "react";
import {
  useForm,
} from "react-hook-form";
import { View, Text } from "react-native";
import { validateName } from "utils/validate";
import { eventMakeFormStyles } from "./EventMakeForm.style";

const EventMakeForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <View style={eventMakeFormStyles.container}>
      <Text style={eventMakeFormStyles.title}>주최자 정보를 입력해주세요</Text>
      <FormValidateInput
        model={{
          type: "text",
          name: "organizer",
          label: "주최자 이름",
          required: {
            value: true,
            message: "필수 입력 사항입니다!",
          },
          validate: (value: string) => validateName(value),
        }}
        errors={errors}
        control={control}
        color={"black"}
      />
      <RadioButtonGroup
        radioElements={organizerCategory}
        model={{
          type: "radiogroup",
          name: "organizerCategory",
          label: "주최자 구분",
          required: {
            value: true,
            message: "필수 입력 사항입니다!",
          },
          validate: (value: string) => undefined,
        }}
        errors={errors}
        control={control}
      />
      <FormValidateInput
        model={{
          type: "text",
          name: "organizer",
          label: "이벤트 제목을 작성해주세요.",
          required: {
            value: true,
            message: "필수 입력 사항입니다!",
          },
          validate: (value: string) => undefined,
        }}
        errors={errors}
        control={control}
        color={"black"}
      />
    </View>
  );
};

export default EventMakeForm;
