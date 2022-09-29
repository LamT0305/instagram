import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HeaderInsta from '../components/home/HeaderInsta';
import Stories from '../components/home/Stories';
import Post from '../components/home/post/Post';
import {POSTS} from '../data/Post';
import BottomTabs from '../components/home/BottomTabs';
import {bottomTabIcons} from '../data/BottomTabIcons';
import {FlashList} from '@shopify/flash-list';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderInsta navigation={navigation} />
      <Stories />
      <FlashList
        data={POSTS}
        renderItem={post => <Post post={post.item} />}
        estimatedItemSize={POSTS?.length | 50}
      />
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default HomeScreen;
