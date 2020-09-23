import React from 'react';
import { Provider } from 'react-redux'
import Post from './components/Post'
import PostForm from './components/PostForm'
import './App.css';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <PostForm />
          <Post />
      </div>
    </Provider>
  );
}

export default App;
