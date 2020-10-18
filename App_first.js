import React from 'react';
import Tweet from './Tweet.js';

function App() {
  return (
    <div className="app">
      <Tweet name="Dev Edd" message="This is a random tweet" likes="100"/>
      <Tweet name="John Snow" message="I am the true king" likes="300"/>
      <Tweet name="Traversy Media" message="700k my dudes" likes="4000"/>
      <Tweet name="Mosh" message="My new course is available" likes="3100"/>
    </div>
  );
}

export default App;
