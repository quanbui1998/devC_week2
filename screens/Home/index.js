import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './header';
import Post from './post';
import { listPost } from '../../data';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={listPost}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <>
              <Post
                user={item.user}
                image={item.image}
                likeCount={item.likeCount}
                navigation={navigation}
              />
              <View style={styles.divider} />
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divider: {
    width: '100%',
    height: 8,
  },
});
