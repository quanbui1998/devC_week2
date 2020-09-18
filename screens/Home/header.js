import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
        }}
        style={styles.image}
        resizeMode='contain'
      />
      <TouchableOpacity style={styles.inbox}>
        <Feather name='inbox' size={28} color='black' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f6fa',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: 50,
  },
  inbox: {
    position: 'absolute',
    right: 10,
  },
});
