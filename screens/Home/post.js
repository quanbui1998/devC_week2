import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Post({ navigation, user, image, likeCount }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            gotoProfile();
          }}
        >
          <Image
            source={{
              uri: user.avatar,
            }}
            style={styles.userAvatar}
            resizeMode='cover'
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            gotoProfile();
          }}
        >
          <Text style={styles.userName}>{user.name}</Text>
        </TouchableOpacity>
      </View>
      <AutoHeightImage
        source={{
          uri: image,
        }}
        width={win.width}
        resizeMode='cover'
      />
      <View style={styles.actionWrapper}>
        <TouchableOpacity
          onPress={() => {
            alert('Like');
          }}
        >
          <Feather
            name='heart'
            size={28}
            color='black'
            style={styles.actionItem}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('Comment');
          }}
        >
          <Feather
            name='message-square'
            size={28}
            color='black'
            style={styles.actionItem}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('Share');
          }}
        >
          <Feather
            name='upload'
            size={28}
            color='black'
            style={styles.actionItem}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineDivider} />
      <View style={styles.likeWrapper}>
        <FontAwesome name='heart' size={24} color='black' />
        <Text style={styles.likeNumber}>
          {likeCount} {likeCount > 1 ? 'likes' : 'like'}
        </Text>
      </View>
      <View style={styles.lineDivider} />
    </View>
  );
  function gotoProfile() {
    navigation.push('Profile', { user: user });
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  userName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  actionWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  actionItem: {
    marginRight: 10,
  },
  likeWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  likeNumber: {
    marginLeft: 10,
    fontWeight: '500',
  },
  lineDivider: {
    borderBottomColor: '#cecece',
    borderBottomWidth: 1,
  },
});
