import { ComponentMeta, ComponentStory } from "@storybook/react";

import EventMakeForm from "./EventMakeForm";

export default {
  title: "컴포넌트/이벤트/폼/EventMakeForm",
  component: EventMakeForm,
} as ComponentMeta<typeof EventMakeForm>;

export const EventMakeFormTest: ComponentStory<typeof EventMakeForm> = () => (
  <EventMakeForm />
);
