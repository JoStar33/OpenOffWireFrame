import { ComponentMeta, ComponentStory } from "@storybook/react";

import { useMemo, useState } from "react";
import { RadioButtonProps } from "react-native-radio-buttons-group";
import RadioButtonGroup from "./RadioButtonGroup";

export default {
  title: "컴포넌트/분자/카드/RadioButtonGroup",
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

const RadioContainer = () => {
  const [value, setValue] = useState<string | undefined>();
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Option 1",
        value: "option1",
      },
      {
        id: "2",
        label: "Option 2",
        value: "option2",
      },
      {
        id: "3",
        label: "Option 3",
        value: "option3",
      },
      {
        id: "4",
        label: "Option 4",
        value: "option4",
      },
    ],
    []
  );
  return (
    <RadioButtonGroup
      radioElements={radioButtons}
      setSelectedId={setValue}
      selectedId={value}
    />
  );
};

export const RadioButtonGroupTest: ComponentStory<
  typeof RadioButtonGroup
> = () => <RadioContainer />;
