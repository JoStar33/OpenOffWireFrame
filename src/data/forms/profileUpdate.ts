import { FormValidateModel } from "types/apps/form";
import { validateEmail, validateName, validateBirthday, validatePhoneNumber } from "utils/validate";

export const profileUpdateForm: FormValidateModel[] = [
  {
    type: "text",
    name: "name",
    label: "이름",
    required: {
      value: true,
      message: "필수로 작성해주셔야 합니다!",
    },
    validate: (value: string) =>
      validateName(value)
  },
  {
    type: "text",
    name: "birthday",
    label: "생일",
    required: {
      value: true,
      message: "필수로 작성해주셔야 합니다!",
    },
    validate: (value: string) =>
      validateBirthday(value)
  },
  {
    type: "gender",
    name: "gender",
    label: "성별",
    required: {
      value: true,
      message: "필수로 작성해주셔야 합니다!",
    },
    validate: (value: string) =>
      undefined
  },
  {
    type: "text",
    name: "phonenumber",
    label: "핸드폰번호",
    required: {
      value: true,
      message: "필수로 작성해주셔야 합니다!",
    },
    validate: (value: string) => 
      validatePhoneNumber(value)
  },
  {
    type: "text",
    name: "email",
    label: "이메일 주소",
    required: {
      value: true,
      message: "필수로 작성해주셔야 합니다!",
    },
    validate: (value: string) =>
      validateEmail(value)
  }
];
