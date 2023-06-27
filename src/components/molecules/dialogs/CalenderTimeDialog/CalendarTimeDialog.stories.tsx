import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, View } from "react-native";
import CalendarTimeDialog from "./CalendarTimeDialog";
import { useState } from "react";

export default {
  title: "컴포넌트/분자/다이얼로그/CalendarTimeDialog",
  component: CalendarTimeDialog,
} as ComponentMeta<typeof CalendarTimeDialog>;

const CalendarContainer = () => {
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
      <CalendarTimeDialog
        dialogShow={dialogShow}
        dialogText={"날짜를 정해주세요."}
        handleDialog={function (): void {
          setDialogShow(false);
        }}
      />
      <Button title="다이얼로그 오픈" onPress={() => setDialogShow(true)}/>
    </View>
  );
};

export const CalendarTimeDialogTest: ComponentStory<
  typeof CalendarTimeDialog
> = () => <CalendarContainer />;
