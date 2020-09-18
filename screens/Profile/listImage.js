import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import MasonryList from 'react-native-masonry-list';
import { listImage } from '../../data';

const win = Dimensions.get('window');

export default function ListImage() {
  const [col, setCol] = useState(2);
  return (
    <View style={styles.container}>
      <MasonryList
        listContainerStyle={styles.masonry}
        images={listImage}
        columns={col}
        completeCustomComponent={(props) => (
          <View
            style={[{ width: (win.width - 40) / col }, styles.imageWrapper]}
          >
            <AutoHeightImage
              key={props.data.id.toString()}
              source={{
                uri: props.data.uri,
              }}
              width={(win.width - 80) / col}
              style={styles.imageItem}
              resizeMode='cover'
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  masonry: {
    paddingHorizontal: 20,
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageItem: {
    borderRadius: 10,
  },
});
