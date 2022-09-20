import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HeaderInsta = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/logo/Instagram_logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
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
            <Text style={styles.unreadBadgeText}>
                12
            </Text>
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
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icons: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight:10,
  },
  unreadBadge:{
    backgroundColor:'#FF3250',
    position:'absolute',
    left:10,
    bottom:20,
    width:25, 
    height:20,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    zIndex:100,
  },
  unreadBadgeText:{
    color:'white',

  }
});

export default HeaderInsta;
