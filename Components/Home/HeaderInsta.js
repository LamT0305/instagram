import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './style/HeaderInstaStyle';
const HeaderInsta = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/logo/Instagram_logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('NewPostScreen');
          }}>
          <Image
            style={styles.icons}
            source={require('../../assets/logo/plus.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require('../../assets/logo/heart.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>12</Text>
          </View>
          <Image
            style={styles.icons}
            source={require('../../assets/logo/messenger.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default HeaderInsta;
