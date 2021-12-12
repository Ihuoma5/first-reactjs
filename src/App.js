import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import Main from './components/Main';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}
function Page() {
  return(
    <div>
      <Main />
      <Navbar />
    </div>
  )
}
ReactDOM.render(<Page />, document.getElementById("root"))
export default App;
