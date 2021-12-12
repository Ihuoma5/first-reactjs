import React from "react";
import ReactDOM from "react-dom";


function Navbar() {
    return(
      <div className="container">
         <nav>
           <h2>ReactFacts</h2>
           <h3>React course - project 1</h3>
           </nav>
          <main>
            <h1>Fun facts about React</h1>
            <ul>
              <li>Was first realeased in 2013</li>
              <li>Was orginally created by Jordan Walke</li>
              <li>Has well over 100k stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
          </main>
      </div>
    )
  }
  ReactDOM.render(<Navbar />, document.getElementById("root"))
  export default Navbar;