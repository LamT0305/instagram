import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {USERS} from '../../data/user';
const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index}>
            <Image
              key={index}
              source={{uri: story.image}}
              style={styles.story}
            />
            <Text style={styles.Text}>
              {story.user.length > 11 ? story.user.slice(0, 10) +'...':story.user}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  Text:{
    color:'black',
    marginHorizontal:6,
    textAlign:'center',
  }
});
export default Stories;
