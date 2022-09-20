import {
  View,
  Text,
  StyleSheet,
  style,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import {FooterIcons} from '../../data/footerIcon';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="horizontal" style={{color: 'black'}} />
      <PostHeader post={post} />
      <Postimage post={post} />
      <View style={{marginTop: 5}}>
        <Postfooter />
      </View>
      <Likes post={post} />
      <Captions post={post} />
      <CommentSection post={post} />
      <Comment post={post} />
    </View>
  );
};

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{uri: post.profile_picture}} style={styles.story} />
      <Text style={{color: 'black'}}>{post.user}</Text>
    </View>

    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>...</Text>
    </View>
  </View>
);

const Postimage = ({post}) => (
  <View style={{width: '100%', height: 300}}>
    <Image
      source={{uri: post.imageurl}}
      style={{height: '100%', resizeMode: 'cover'}}
    />
  </View>
);

const Postfooter = () => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={{flexDirection: 'row'}}>
      <Icon imgstyle={styles.FooterIcon} imgurl={FooterIcons[0].imageurl} />
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

const Likes = ({post}) => (
  <View>
    <Text
      style={{fontWeight: '700', fontSize: 15, color: 'black', marginLeft: 5}}>
      {post.like} Likes{' '}
    </Text>
  </View>
);

const Captions = ({post}) => (
  <View style={{flexDirection: 'row', marginLeft: 5}}>
    <Text style={{fontWeight: 'bold', color: 'black', marginRight: 5}}>
      {post.user}
    </Text>
    <Text style={{color: 'black'}}>{post.caption}</Text>
  </View>
);

const CommentSection = ({post}) => (
  <View style={{marginLeft:5,}}>
    {!!post.comment.length && (<Text style={{color:'grey'}}>
      View {post.comment.length > 1? 'all' : ''} {post.comment.length}{' '}
      {post.comment.length > 1 ? 'comments' : 'comment'}</Text>)}  
  </View>
);

const Comment =({post})=>(
    <View>
      {post.comment.map((comment, index) => (
        <View key={index} style={{marginLeft:5}}>
          <Text style={{color:'black'}}>
            <Text style={{fontWeight:'bold'}}>{comment.user}</Text> {' '}
            {comment.comment}
          </Text>
        </View>
      ))}
    </View>
)
//A.) 0 comment => Don't render component
//B.) 1 comment => Render component without "all" and singular comment
//C.) more than 1 => render component with "all" and plural comments
const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginHorizontal: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  FooterIcon: {
    width: 35,
    height: 35,
    marginHorizontal: 2,
  },
});

export default Post;
