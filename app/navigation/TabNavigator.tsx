// app/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import PopularItemScreen from '../screens/PopularItemScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: 'none' }  // 탭 바를 숨깁니다.
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          headerShown: false, // 헤더를 숨깁니다.
        }}
      />
      <Tab.Screen name="Category" component={CategoryScreen}
        options={{
          headerShown: false, // 헤더를 숨깁니다.
        }}
      />
      <Tab.Screen name="PopularItem" component={PopularItemScreen}
        options={{
          headerShown: false, // 헤더를 숨깁니다.
        }}
      />
    </Tab.Navigator>
  );
}
