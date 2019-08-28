import React, { Component } from "react";
import NewSmurfForm from './NewSmurfForm'
import SmurfList from "./SmurfList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>WELCOME TO THE SMURF VILLAGE 2.0 W/ Redux</h1>
        <NewSmurfForm/>
        <SmurfList />
        <img src="http://kidscreen.com/wp/wp-content/uploads/2013/05/TheSmurfs_01.jpg" alt='smurf village' />
      </div>
    );
  }
}

export default App;
