import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FormikPostUploader from './FormikPostUploader';
import { Divider } from 'react-native-elements';
const AddNewPost = () => {
  return (
    <View >
      <Header />
      <Divider width={1} />
      <FormikPostUploader/>
    </View>
  );
};
const Header = () => (
  <View style={styles.headercontainer}>
    <TouchableOpacity>
      <Image
        source={{uri: 'https://img.icons8.com/android/32/000000/back.png'}}
        style={{width: 25, height: 25}}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text />
  </View>
);
const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:8,
  },
  headerText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    marginRight:28,
  },
});

export default AddNewPost;
