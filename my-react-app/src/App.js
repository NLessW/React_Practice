import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const comments =[
  {name:'NLess', content: 'My Comment!'},
  {name:'Largo', content: 'Do Neck, too.'},
  {name:'Brim', content: '세상에..샐러드가..감자탕이..'},
];
function App() {
  return (
    <div className="App" style ={{padding:16, backgroundColor:'#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {comments.map((comment,index)=>{
          return(
            <Comment
              name={comment.name}
              content={comment.content}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
