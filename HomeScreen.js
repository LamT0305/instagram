import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HeaderInsta from './Components/Home/HeaderInsta';
import Stories from './Components/Home/Stories';
import Post from './Components/Home/Post';
import {POSTS} from './data/post';

const HomeScreen = ()=> {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderInsta />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({ 
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default HomeScreen
