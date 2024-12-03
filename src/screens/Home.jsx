import { useLayoutEffect } from "react";
import { SafeAreaView, TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faInbox, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./Profile";
import RequestScreen from "./Requests";
import FriendScreen from "./Friends";

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerLeft: () => (
            <View style={{marginLeft: 20}}>
                <Image 
                source={require('../assets/profile.jpg')} 
                style={{ width:28, height:28}}
                
                />
            </View>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <FontAwesomeIcon
            style={ {marginRight: 20}}
              icon={faMagnifyingGlass}  // Use the imported icon here
              size={22}
              color='#404040'
            />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Requests: faBell,
            Friend: faInbox,
            Profile: faUser,
          };
          const icon = icons[route.name];
          return <FontAwesomeIcon icon={icon} size={28} color={color} />;
        },
        tabBarActiveTintColor: '#202020',
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Requests" component={RequestScreen} />
      <Tab.Screen name="Friend" component={FriendScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
