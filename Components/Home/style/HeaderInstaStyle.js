import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
      marginRight: 10,
    },
    unreadBadge: {
      backgroundColor: '#FF3250',
      position: 'absolute',
      left: 10,
      bottom: 20,
      width: 25,
      height: 20,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    },
    unreadBadgeText: {
      color: 'white',
    },
  });

