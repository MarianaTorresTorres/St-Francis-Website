import React from 'react';
import logo from './logo.svg';
import {Button} from 'semantic-ui-react';
import './App.css';

function App() {
  const name = "Mariana"
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <h1>hello {name}</h1>
    <button class="ui button">hello</button>
    </>
  );
}

export default App;
