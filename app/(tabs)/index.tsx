import { Image, ImageBackground, StyleSheet, StatusBar, View, Text } from 'react-native';

export default function HomeScreen() {
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
            <ImageBackground
              source={require('@/assets/images/cat-category.png')}
              style={styles.categoryImage}
              resizeMode="cover" // 이미지가 부모 컨테이너를 완전히 채우도록 설정
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={styles.categoryText}>
              카테고리 2
            </Text>
            <ImageBackground
              source={require('@/assets/images/cat-category.png')}
              style={styles.categoryImage}
              resizeMode="cover" // 이미지가 부모 컨테이너를 완전히 채우도록 설정
            />
          </View>
        </View>
        <View style={styles.popularItem}>
          <Text style={styles.popularItemText}>
            인기상품
          </Text>
          <ImageBackground
            source={require('@/assets/images/cat-popularItem.png')}
            style={styles.popularItemImage}
            resizeMode="cover" // 이미지가 부모 컨테이너를 완전히 채우도록 설정
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: (StatusBar.currentHeight || 0) + 20,
    alignItems: 'center',
    // justifyContent: 'center', // 로고를 중앙에 위치시키기 위해 추가
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
    // marginBottom: 20, // 이미지 아래쪽에 조금의 간격을 두고 텍스트 배치
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  categoryImage: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#C7A991',
    borderRadius: 10,
    overflow: 'hidden',  // borderRadius를 적용하기 위해 필요
    marginHorizontal: 10,
    // marginBottom: 10,
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
    overflow: 'hidden',  // borderRadius를 적용하기 위해 필요
    marginHorizontal: 10,
  }

});

