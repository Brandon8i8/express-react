import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Feed from './components/Feed';

function App() {
  const [feed, setFeed] = useState([]);
  
  let handleNewSubmit = (data) => {
    setFeed([...feed, data]);
  }

  return (
    <div>
      <Form onNewSubmit={handleNewSubmit}/>
      <Feed posts={feed}/>
    </div>
  )
}

export default App
