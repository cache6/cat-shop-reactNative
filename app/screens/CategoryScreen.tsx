
// app/screens/CategoryScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryScreen() {
    return (
        <View style={styles.container}>
            <Text>Category Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
