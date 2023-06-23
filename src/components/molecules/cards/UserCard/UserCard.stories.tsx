import { ComponentMeta, ComponentStory } from "@storybook/react";

import UserCard from "./UserCard";

export default {
  title: "컴포넌트/분자/카드/UserCard",
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

export const UserCardTest: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
);

UserCardTest.args = {
  user: {
    nickname: "술",
    name: "술",
    profileImage: "https://i.namu.wiki/i/ziz3Ibshn8FZx1fD6tIS0ZEW1URPhlf0TKA0BqEj0rXuVCYYBGSdlrPLi6LaK3Tn--YBSuQV1cd4fWq9VhtVJu-8soLETbuhSlnF3MJhXy8sCcvB-yir7V0U2mENuqxUK87rSHWDrVxidzmZjlw3xg.webp",
    interestArea: "경남 창원",
    interestField: ["공연", "세미나", "짱 긴 텍스트"],
    birthday: "2023-03-12",
    gender: "남",
    phoneNumber: "",
    email: "werdh@naver.com",
  }
};
