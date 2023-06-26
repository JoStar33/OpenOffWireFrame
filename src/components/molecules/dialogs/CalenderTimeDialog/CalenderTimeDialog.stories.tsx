import { ComponentMeta, ComponentStory } from "@storybook/react";

import CalenderTimeDialog from "./CalenderTimeDialog";

export default {
  title: "컴포넌트/분자/다이얼로그/CalenderTimeDialog",
  component: CalenderTimeDialog,
} as ComponentMeta<typeof CalenderTimeDialog>;

export const CalenderTimeDialogTest: ComponentStory<typeof CalenderTimeDialog> = () => (
  <CalenderTimeDialog />
);