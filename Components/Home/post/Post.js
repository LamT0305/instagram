import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import PostFooter from './PostFooter';
import PostComment from './PostComment';
import {styles} from '../style/PostStyle';
const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <Divider width={1} />
      <PostHeader post={post} />
      <Postimage post={post} />
      <View style={{marginTop: 5}}>
        <PostFooter post={post} />
      </View>
      <PostComment post={post} />
    </View>
  );
};

const PostHeader = ({post}) => (
  <View style={styles.PostHeader}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{uri: post.profile_picture}} style={styles.profilePic} />
      <Text style={{color: 'black'}}>{post.user}</Text>
    </View>

    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>...</Text>
    </View>
  </View>
);

const Postimage = ({post}) => {
  return (
    <View style={{width: '100%', height: 300}}>
      <TouchableOpacity activeOpacity={1}>
        <Image
          source={{uri: post.imageurl}}
          style={{height: '100%', resizeMode: 'cover'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Post;
