// stories/ProfileUpdateCard.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SubmitValue } from "types/apps/form";
import { validateEmail, validateNick, validatePassword } from "utils/validate";
import ProfileUpdateCard from "./ProfileUpdateCard";
import { View } from "react-native";
import { vw } from "rxn-units";

export default {
  title: "컴포넌트/분자/카드/ProfileUpdateCard",
  component: ProfileUpdateCard,
} as ComponentMeta<typeof ProfileUpdateCard>;

export const ProfileUpdateCardTest: ComponentStory<
  typeof ProfileUpdateCard
> = () => (
  <View style={{ flex: 1, width: vw(100), justifyContent: "center", alignItems: "center" }}>
    <ProfileUpdateCard />
  </View>
);
