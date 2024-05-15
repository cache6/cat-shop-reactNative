// app/screens/HomeScreen.tsx
import { Image, ImageBackground, StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';

type Props = {
    navigation: NavigationProp<any>;
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageBackground
                source={require('@/assets/images/cat-main.png')}
                style={styles.container}
                resizeMode="cover"
            >
                <Image
                    source={require('@/assets/images/cat-logo-white.png')}
                    style={styles.logo}
                />
            </ImageBackground>

            <View style={{ flex: 1 }}>
                <View style={styles.category}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.categoryText}>
                            카테고리 1
                        </Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Category')}>
                            <ImageBackground
                                source={require('@/assets/images/cat-category.png')}
                                style={styles.categoryImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.categoryText}>
                            카테고리 2
                        </Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Category')}>
                            <ImageBackground
                                source={require('@/assets/images/cat-category.png')}
                                style={styles.categoryImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.popularItem}>
                    <Text style={styles.popularItemText}>
                        인기상품
                    </Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('PopularItem')}>
                        <ImageBackground
                            source={require('@/assets/images/cat-popularItem.png')}
                            style={styles.popularItemImage}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: (StatusBar.currentHeight || 0) + 20,
        alignItems: 'center',
        flex: 1
    },
    logo: {
        width: 100,
        height: 30,
        resizeMode: 'contain'
    },
    category: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#687076',
        textAlign: 'center',
    },
    categoryImage: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#C7A991',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    popularItem: {
        flex: 1,
        flexDirection: 'column'
    },
    popularItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#687076',
        textAlign: 'center',
    },
    popularItemImage: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
    }
});
