import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {USERS} from '../../data/User';
import { styles } from './style/StoryStyle';
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

export default Stories;
