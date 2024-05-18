import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

interface Post {
  id: number;
  title: string;
}

export default function Shop() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  const addOrUpdatePost = () => {
    if (input.trim()) {
      if (editId === null) {
        // Add new post
        setPosts([...posts, { id: posts.length + 1, title: input }]);
      } else {
        // Update existing post
        setPosts(posts.map(post => post.id === editId ? { ...post, title: input } : post));
        setEditId(null);
      }
      setInput('');
    }
  };

  const editPost = (id: number) => {
    const post = posts.find(post => post.id === id);
    if (post) {
      setInput(post.title);
      setEditId(post.id);
    }
  };

  const deletePost = (id: number) => {
    Alert.alert("Delete Post", "Are you sure you want to delete this post?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => setPosts(posts.filter(post => post.id !== id)) }
    ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="새 게시글 입력"
        value={input}
        onChangeText={setInput}
      />
      <Button title={editId ? "Update" : "Add"} onPress={addOrUpdatePost} />
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item.title}</Text>
            <Button title="Edit" onPress={() => editPost(item.id)} />
            <Button title="Delete" onPress={() => deletePost(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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