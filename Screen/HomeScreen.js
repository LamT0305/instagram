import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HeaderInsta from '../Components/Home/HeaderInsta';
import Stories from '../Components/Home/Stories';
import Post from '../Components/Home/Post';
import {POSTS} from '../data/post';
import BottomTabs, {bottomTabIcons} from '../Components/Home/BottomTabs';


const HomeScreen = ()=> {
  return (
    <SafeAreaView style={styles.container}>     
      <HeaderInsta />
      <ScrollView>
      <Stories />     
        {POSTS.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </ScrollView>
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
export default HomeScreen
