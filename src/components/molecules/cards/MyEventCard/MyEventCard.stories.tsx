import { ComponentMeta, ComponentStory } from "@storybook/react";

import MyEventCard from "./MyEventCard";

export default {
  title: "컴포넌트/분자/카드/MyEventCard",
  component: MyEventCard,
} as ComponentMeta<typeof MyEventCard>;

export const MyEventCardTest: ComponentStory<typeof MyEventCard> = (args) => (
  <MyEventCard {...args} />
);

MyEventCardTest.args = {
  event: {
    id: "124dsggsg23",
    eventType: "공연",
    date: "2023-06-24 19:00",
    image:
      "https://i.namu.wiki/i/ziz3Ibshn8FZx1fD6tIS0ZEW1URPhlf0TKA0BqEj0rXuVCYYBGSdlrPLi6LaK3Tn--YBSuQV1cd4fWq9VhtVJu-8soLETbuhSlnF3MJhXy8sCcvB-yir7V0U2mENuqxUK87rSHWDrVxidzmZjlw3xg.webp",
    name: "소주대회",
    place: "경기도 안양시 동안구",
    participant: 23,
  },
};
