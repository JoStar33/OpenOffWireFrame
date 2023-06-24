import { FormValidateModel } from "types/apps/form";
import { validateEmail, validateNick, validateBirthday, validatePhoneNumber } from "utils/validate";

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
      validateNick(value) || "이름은 한글로만 구성해주세요.",
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
      validateBirthday(value) || "생년월일 형식으로 작성해주세요!",
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
      true,
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
      validatePhoneNumber(value) || "핸드폰 형식에 맞지않습니다. 다시 입력해주세요.",
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
      validateEmail(value) || "이메일 형식에 맞지않습니다. 다시 입력해주세요.",
  }
];
