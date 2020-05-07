import React, { Component } from "react"
import { connect } from 'react-redux'
import SmurfForm from './SmurfForm'
import SmurfList from "./SmurfList";
import { getSmurfs } from '../actions/getSmurfs'
import "./App.css";

class App extends Component {
  componentDidMount () {
    this.props.dispatch(getSmurfs())
  }
  render() {
    return (
      <div className="App">
        <h1>WELCOME TO THE SMURF VILLAGE 2.0 W/ Redux</h1>
        <SmurfForm/>
        <SmurfList />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(App)