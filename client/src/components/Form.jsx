import React, {useState} from 'react';

function Form(props) {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  let handleUserChange = (event) => {
    setUser(event.target.value);
  }
  let handleContentChange = (event) => {
    setContent(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    props.onNewSubmit({user,content});
    setUser("");
    setContent("");
  }

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleUserChange} value={user}></input>
        <br/>
        <textarea placeholder="Say your thoughts..." onChange={handleContentChange} value={content}></textarea>
        <br/>
        <button disabled={user=="" || content==""}>Post</button>
      </form>
    </div>
  )
}

export default Form;