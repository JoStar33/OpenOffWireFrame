// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import EventCard from "./EventCard";

export default {
  title: "컴포넌트/분자/카드/EventCard",
  component: EventCard,
} as ComponentMeta<typeof EventCard>;

export const EventCardTest: ComponentStory<typeof EventCard> = (args) => (
  <EventCard {...args} />
);

EventCardTest.args = {
  event: {
    id: "124dsggsg23",
    eventType: "공연",
    date: "6/24 토요일 저녁 8시",
    image:
      "https://i.namu.wiki/i/ziz3Ibshn8FZx1fD6tIS0ZEW1URPhlf0TKA0BqEj0rXuVCYYBGSdlrPLi6LaK3Tn--YBSuQV1cd4fWq9VhtVJu-8soLETbuhSlnF3MJhXy8sCcvB-yir7V0U2mENuqxUK87rSHWDrVxidzmZjlw3xg.webp",
    name: "소주대회",
    place: "경기도 안양시 동안구",
    participant: 23,
  },
};
