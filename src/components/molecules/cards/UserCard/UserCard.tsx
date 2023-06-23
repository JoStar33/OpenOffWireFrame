import ColorBox from "components/atoms/boxs/ColorBox/ColorBox";
import IconText from "components/atoms/texts/IconText/IconText";
import { Image, Text, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { User } from "types/user";
import { userCardStyles } from "./UserCard.style";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <View style={userCardStyles.container}>
      <View style={userCardStyles.profileContainer}>
        {user.profileImage ? (
          <Image
            style={userCardStyles.profileImage}
            source={{ uri: user.profileImage }}
          ></Image>
        ) : (
          <View style={userCardStyles.noneProfile} />
        )}
        <Text style={userCardStyles.nickName}>{user.nickname}</Text>
      </View>
      <View style={userCardStyles.detailInfo}>
        <IconText
          icon={<FeatherIcon color={"black"} size={20} name="map-pin" />}
          label={"관심 지역"}
        />
        <View style={userCardStyles.fieldContainer}>
          {user.interestField.map((field) => (
            <ColorBox label={`#${field}`} fontColor={"white"} color={"#8B6FE7"} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default UserCard;
