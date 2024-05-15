// app/navigation/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Tabs" component={TabNavigator} options={{
                headerShown: false, // 헤더를 숨깁니다.
            }}
            />
            {/* 필요한 다른 스크린들을 추가 */}
        </Stack.Navigator>
    );
}