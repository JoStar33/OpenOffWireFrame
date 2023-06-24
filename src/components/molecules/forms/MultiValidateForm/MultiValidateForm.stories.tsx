// stories/MultiValidateForm.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SubmitValue } from "types/apps/form";
import { validateEmail, validateNick, validatePassword } from "utils/validate";
import MultiValidateForm from "./MultiValidateForm";

export default {
  title: "컴포넌트/분자/폼/MultiValidateForm",
  component: MultiValidateForm,
} as ComponentMeta<typeof MultiValidateForm>;

export const MultiValidateFormTest: ComponentStory<typeof MultiValidateForm> = (
  args
) => <MultiValidateForm {...args} />;

MultiValidateFormTest.args = {
  formModel: [
    {
      type: "text",
      name: "email",
      label: "이메일",
      required: {
        value: true,
        message: "Field is required!",
      },
      validate: (value: string) =>
        validateEmail(value) ||
        "이메일 형식에 맞지않습니다. 다시 입력해주세요.",
    },
    {
      type: "password",
      name: "password",
      label: "패스워드",
      required: {
        value: true,
        message: "Field is required!",
      },
      validate: (value: string) =>
        validatePassword(value) ||
        "비밀번호는 특수문자, 영문 대소문자, 숫자가 포함된 9자~16자로 입력해주세요.",
    },
    {
      type: "text",
      name: "name",
      label: "성명",
      required: {
        value: true,
        message: "Field is required!",
      },
      validate: (value: string) =>
        validateNick(value) || "성명은 한글로만 구성해주세요.",
    },
  ],
  actionSubmit: (data: SubmitValue) => {
    console.log(data);
    alert(JSON.stringify(data));
  },
  buttonText: "등록",
};
