import React, {useState} from 'react';
import Tweet from './Tweet.js';

function App() {

const [users, setUsers] = useState([
  {name: "Ed", message: "Hello there"},
  {name: "John", message: "I am John Snowu"},
  {name: "Traversy", message: "I am awesome"},
]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
