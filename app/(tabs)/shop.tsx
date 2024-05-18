import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

interface Post {
  id: number;
  title: string;
}

export default function Shop() {
  // 게시물 목록을 저장하는 상태
  const [posts, setPosts] = useState<Post[]>([]);
  // 입력 필드의 텍스트를 저장하는 상태
  const [input, setInput] = useState('');
  // 편집 중인 게시물의 ID를 저장하는 상태
  const [editId, setEditId] = useState<number | null>(null);

  // 게시물을 추가하거나 업데이트하는 함수
  const addOrUpdatePost = () => {
    if (input.trim()) {
      if (editId === null) {
        // 새 게시물을 추가하는 경우
        setPosts([...posts, { id: posts.length + 1, title: input }]);
      } else {
        // 기존 게시물을 업데이트하는 경우
        setPosts(posts.map(post => post.id === editId ? { ...post, title: input } : post));
        setEditId(null);
      }
      setInput('');
    }
  };

  // 편집할 게시물을 선택하는 함수
  const editPost = (id: number) => {
    const post = posts.find(post => post.id === id);
    if (post) {
      setInput(post.title);
      setEditId(post.id);
    }
  };

  // 게시물을 삭제하는 함수
  const deletePost = (id: number) => {
    Alert.alert("게시물 삭제", "이 게시물을 삭제하시겠습니까?", [
      { text: "취소", style: "cancel" },
      { text: "삭제", onPress: () => setPosts(posts.filter(post => post.id !== id)) }
    ]);
  };

  // 컴포넌트의 렌더링 부분
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="새 게시글 입력"
        value={input}
        onChangeText={setInput}
      />
      <Button title={editId ? "업데이트" : "추가"} onPress={addOrUpdatePost} />
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item.title}</Text>
            <Button title="편집" onPress={() => editPost(item.id)} />
            <Button title="삭제" onPress={() => deletePost(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  post: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});