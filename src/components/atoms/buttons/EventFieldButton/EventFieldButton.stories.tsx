import { ComponentMeta, ComponentStory } from "@storybook/react";

import PhoneCover from "components/storybook/PhoneCover/PhoneCover";
import EventFieldButton from "./EventFieldButton";

export default {
  title: "컴포넌트/원자/버튼/EventFieldButton",
  component: EventFieldButton,
} as ComponentMeta<typeof EventFieldButton>;

export const EventFieldButtonWhiteTest: ComponentStory<typeof EventFieldButton> = (args) => (
  <PhoneCover children={<EventFieldButton {...args} />}/>
);

export const EventFieldButtonDarkTest: ComponentStory<typeof EventFieldButton> = (args) => (
  <PhoneCover children={<EventFieldButton {...args} />}/>
);

EventFieldButtonWhiteTest.args = {
  isDark: false,
  label: "공연"
}

EventFieldButtonDarkTest.args = {
  isDark: true,
  label: "공연"
}