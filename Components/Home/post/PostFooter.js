import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {FooterIcons} from '../../../data/FooterIcon';
import { styles } from '../style/PostFooterStyle';
const PostFooter = ({post}) => {
  return (
    <View>
      <Postfooter />
      <Likes post={post} />
      <Captions post={post} />
    </View>
  );
};
const Postfooter = () => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={{flexDirection: 'row'}}>
      <IconLikeReact />
      <Icon imgstyle={styles.FooterIcon} imgurl={FooterIcons[1].imageurl} />
      <Icon imgstyle={styles.FooterIcon} imgurl={FooterIcons[2].imageurl} />
    </View>
    <View>
      <Icon imgstyle={styles.FooterIcon} imgurl={FooterIcons[3].imageurl} />
    </View>
  </View>
);

const Icon = ({imgstyle, imgurl}) => (
  <TouchableOpacity>
    <Image style={imgstyle} source={{uri: imgurl}} />
  </TouchableOpacity>
);

const Likes = ({post}) => {
  return (
    <View>
      <Text style={styles.Likes}>{post.like} Likes </Text>
    </View>
  );
};

const Captions = ({post}) => (
  <View style={{flexDirection: 'row', marginLeft: 5}}>
    <Text style={styles.captionText}>{post.user}</Text>
    <Text style={{color: 'black'}}>{post.caption}</Text>
  </View>
);
const IconLikeReact = () => {
  const [react, setReact] = useState(true);
  const onPressed = () => {
    setReact(!react);
  };
  return (
    <TouchableOpacity onPress={onPressed}>
      {react ? (
        <Image
          source={{uri: FooterIcons[0].imageurl}}
          style={styles.FooterIcon}
        />
      ) : (
        <Image
          source={require('../../../assets/post/red_heart.png')}
          style={styles.FooterIcon}
        />
      )}
    </TouchableOpacity>
  );
};


export default PostFooter;
