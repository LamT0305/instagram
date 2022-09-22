import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../Components/NewPost/AddNewPost'
const NewPostScreen = () => {
  return (
    <SafeAreaView>
      <AddNewPost/>
    </SafeAreaView>
  )
}

export default NewPostScreen