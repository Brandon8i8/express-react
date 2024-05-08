import React, {useState} from 'react';

function ReplyForm(props) {
  const [reply, setReply] = useState("");

  let handleReplyChange = (event) => {
    setReply(event.target.value);
  }
  let handleReplySubmit = (event) => {
    event.preventDefault();
    props.onNewReply({reply});
    setReply("");
  }

  return (
    <form onSubmit={handleReplySubmit}>
      <input type="text" placeholder="Comment" onChange={handleReplyChange} value={reply}></input>
      <button disabled={reply==""}>Send</button>
    </form>
  )
}

function ReplyList(props) {
  let renderReplies = () => {
    return (props.replies.map((data, index) => {
      return <p key={index}>{data.reply}</p>;
    }))
  }

  return (
    <div>{renderReplies()}</div>
  )
}

function Post(props) {
  const [likes, setLikes] = useState(0);
  const [replyList, setReplyList] = useState([]);

  let handleLike = () => {
    setLikes(likes+1);
  }

  let handleNewReply = (data) => {
    setReplyList([...replyList, data]);
  }

  return (
    <div className="post">
      <h2>{props.user}</h2>
      <p>{props.content}</p>
      <button onClick={handleLike}>Likes: {likes}</button>
      <h2>Comments:</h2>
      <ReplyForm onNewReply={handleNewReply}/>
      <ReplyList replies={replyList}/>
    </div>
  )
}

export default Post;