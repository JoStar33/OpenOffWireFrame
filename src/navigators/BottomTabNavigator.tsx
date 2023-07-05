import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BottomTabMenu } from "constants/menu";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import MyScreen from "screens/MyScreen/MyScreen";
const Tab = createMaterialBottomTabNavigator();

export type RootStackParamList = {
  Login: undefined;
};

const BottomTabNavigator = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={BottomTabMenu.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: "홈"
        }}
      />
      <Tab.Screen
        name={BottomTabMenu.My}
        component={MyScreen}
        options={{
          tabBarLabel: "마이페이지"
        }}
        listeners={{
          tabPress: (e) => {
            navigation.navigate("Login");
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;