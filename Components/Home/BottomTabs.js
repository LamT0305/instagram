import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements' 
import { TouchableOpacity } from 'react-native-gesture-handler'

export const bottomTabIcons=[
  {
      name:'Home',
      active:'https://img.icons8.com/ios-filled/32/000000/home.png',
      inactive:'https://img.icons8.com/ios/32/000000/home--v1.png'
  },
  {
      name:'Search',
      inactive:'https://img.icons8.com/material/32/000000/search--v1.png',
      active:'https://img.icons8.com/ios-filled/32/000000/search--v3.png'
  },
  {
      name:'Reels',
      active:'https://img.icons8.com/ios-filled/32/000000/instagram-reel.png',
      inactive:'https://img.icons8.com/ios/32/000000/instagram-reel.png',
  },
  {
      name:'Shop',
      active:'https://img.icons8.com/ios-filled/32/000000/online-store.png',
      inactive:'https://img.icons8.com/ios/32/000000/online-store.png',
  },
  {
    name:'Profile',
    active:''
  }
]

const BottomTabIcons = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={()=>setActiveTab(icon.name)}>
      <Image />
    </TouchableOpacity>
  )
  return (
    <View>
      <Text>BottomTabIcons</Text>
    </View>
  )
}

export default BottomTabIcons