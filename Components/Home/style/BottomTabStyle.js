import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 50,
      paddingVertical: 8,
    },
    icon: {
      width: 32,
      height: 32,
    },
    profilePic: (activeTab = '') => ({
      borderRadius: 50,
      borderWidth: activeTab === 'Profile' ? 0 : 2,
      borderColor: '#fff',
    }),
  });

