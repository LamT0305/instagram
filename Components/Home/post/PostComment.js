import { View, Text } from 'react-native'
import React from 'react'

const PostComment = ({post}) => {
  return (
    <View>
      <CommentSection post={post}/>
      <Comment post={post}/>
    </View>
  )
}
const CommentSection = ({post}) => (
    <View style={{marginLeft: 5}}>
      {!!post.comment.length && (
        <Text style={{color: 'grey'}}>
          View {post.comment.length > 1 ? 'all' : ''} {post.comment.length}{' '}
          {post.comment.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
  
  const Comment = ({post}) => (
    <View>
      {post.comment.map((comment, index) => (
        <View key={index} style={{marginLeft: 5}}>
          <Text style={{color: 'black'}}>
            <Text style={{fontWeight: 'bold'}}>{comment.user}</Text>{' '}
            {comment.comment}
          </Text>
        </View>
      ))}
    </View>
  );
export default PostComment