import React, {useState} from 'react';
import Post from './Post';

function Feed(props) {
  let renderPosts = () => {
    return (props.posts.map((data, index) => {
      return <Post key={index} user={data.user} content={data.content}/>
    }))
  }
  
  return (
    <div>{renderPosts()}</div>
  )
}

export default Feed;