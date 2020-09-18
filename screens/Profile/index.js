import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import ListImage from './listImage';
import { socialItemList } from '../../data';
import Header from './header';

export default function Profile({ navigation, route }) {
  const { user } = route.params;
  const { isHideHeader } = route.params;
  return (
    <View style={styles.container}>
      {!isHideHeader ? (
        <Header navigation={navigation} />
      ) : (
        <View style={{ height: 20 }} />
      )}

      <ScrollView style={styles.container}>
        <View style={styles.informationContainer}>
          <View style={styles.informationWrapper}>
            <Image
              source={{
                uri: user.avatar,
              }}
              style={styles.avatarImage}
              resizeMode='cover'
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userCareer}>{user.career}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton}>
                  <Feather name='send' size={20} color='#fff' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.parameterWrapper}>
            {socialItemList.map((item) => {
              return (
                <View key={item.label} style={styles.parameterItem}>
                  <Text style={styles.parameterItemNumber}>{item.value}</Text>
                  <Text style={styles.parameterItemLabel}>{item.label}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <ListImage />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  informationContainer: {
    marginBottom: 20,
  },
  informationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  userName: {
    fontSize: 24,
    fontWeight: '500',
    paddingBottom: 2,
  },
  userCareer: {
    fontSize: 18,
    color: 'gray',
    paddingBottom: 18,
  },
  followButton: {
    paddingHorizontal: 26,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgb(71,113,246)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  followText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  sendButton: {
    paddingHorizontal: 14,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgb(120,213,250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parameterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  parameterItem: {
    alignItems: 'center',
  },
  parameterItemNumber: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 5,
  },
  parameterItemLabel: {
    fontSize: 16,
    color: 'gray',
  },
});
