import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { BottomTabMenu } from "constants/menu";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import MyScreen from "screens/MyScreen/MyScreen";
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
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
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;