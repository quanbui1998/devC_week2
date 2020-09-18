import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YellowBox, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  );
}

function EmptyScreen() {
  return <View></View>;
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <CustomBottomTabBar {...props} />}>
          <Tab.Screen name='Main' component={MainStackScreen}></Tab.Screen>
          <Tab.Screen name='Plus' component={EmptyScreen}></Tab.Screen>
          <Tab.Screen
            name='Personal'
            component={Profile}
            initialParams={{
              user: {
                name: 'An Vy',
                avatar: 'https://i.ytimg.com/vi/oWtcp6Gi-YA/maxresdefault.jpg',
                career: 'Actor',
              },
              isHideHeader: true,
            }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

function CustomBottomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName, alignItems, flex;
        if (route.name === 'Main') {
          iconName = 'home';
          alignItems = 'flex-end';
          flex = 2;
        } else if (route.name === 'Plus') {
          iconName = 'plus-circle';
          alignItems = 'center';
          flex = 3;
        } else if (route.name === 'Personal') {
          iconName = 'user';
          alignItems = 'flex-start';
          flex = 2;
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <View key={route.key} style={{ flex: flex, alignItems: alignItems }}>
            <TouchableOpacity
              accessibilityRole='button'
              accessibilityStates={isFocused ? ['selected'] : []}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Feather
                name={iconName}
                size={25}
                color={isFocused ? 'rgb(0, 122, 255)' : '#8E8E8F'}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
