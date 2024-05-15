import { StyleSheet, View, Text } from 'react-native';

export default function Shop() {
  return (
    <View style={styles.container}>
      <Text>Shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
