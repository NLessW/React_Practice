import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const element = <h1>Hello, world!</h1>
/*
const name = "Less";
const element = <h1>Hello, {name}!</h1>
*/
/*
const formatName = function(name){
  return name.firstName + name.lastName;
}
const name = {
  firstName: "N",
  lastName: "Less",
};
*/
//const element = <h1>Hello {name.firstName + name.lastName}!</h1>
//const element = <h1>Hello, {formatName(name)}!</h1>
/*
ReactDOM.render(
  element,
  document.getElementById('root')
);*/

function tick(){
  const element =(
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
//serviceWorker.unregister();

setInterval(tick,1000);