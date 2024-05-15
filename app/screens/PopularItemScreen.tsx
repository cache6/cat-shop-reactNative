// app/screens/PopularItemScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PopularItemScreen() {
    return (
        <View style={styles.container}>
            <Text>Popular Item Screen</Text>
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
