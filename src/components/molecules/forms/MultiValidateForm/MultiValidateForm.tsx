import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import FormValidateInput from "components/atoms/inputs/FormValidateInput/FormValidateInput";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { FormValidateModel, SubmitValue } from "types/apps/form";
import { multiValidateFormStyles } from "./MultiValidateForm.style";
import GenderInput from "components/atoms/inputs/GenderInput/GenderInput";

interface Props {
  color: "black" | "white";
  formModel: FormValidateModel[];
  actionSubmit: (data: SubmitValue) => void;
  buttonText: string;
}
/*
  required: '닉네임을 입력해주세요.',
  // required: true,
  // boolean값도 가능하지만 문자열 값을 주면, input의 value가 없을 때 해당 문자열이 errors 객체로 반환되어 에러 메세지로 표시할 수 있다.
  minLength: { // value의 최소 길이
    value: 3,
    message: '3글자 이상 입력해주세요.', // 에러 메세지
  },
  pattern: { // input의 정규식 패턴
    value: /^[A-za-z0-9가-힣]{3,10}$/,
    message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자', // 에러 메세지
  },
*/
const MultiValidateForm = ({
  formModel,
  actionSubmit,
  buttonText,
  color,
}: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <View style={multiValidateFormStyles.container}>
      {formModel.map((model, _id) => {
        if (model.name === "gender")
          return (
            <GenderInput
              key={_id}
              model={model}
              errors={errors}
              control={control}
            />
          );
        return (
          <FormValidateInput
            key={_id}
            model={model}
            errors={errors}
            control={control}
            color={color}
          />
        );
      })}
      <View style={multiValidateFormStyles.buttonContainer}>
        <ColorButton
          label={buttonText}
          color={color === "black" ? "black" : "white"}
          handleClick={handleSubmit((data) => actionSubmit(data))}
          backgroundColor={color === "black" ? "#D9D9D9" : "#8B6FE7"}
        />
      </View>
    </View>
  );
};

export default MultiValidateForm;
