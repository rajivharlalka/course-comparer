import React, { Component } from 'react';
import './App.css';
import Branch from './Branch/Branch';

class App extends Component {

  state = {
    compareToggle : false
  }

  showCourses = (event) => {
    event.preventDefault();
    console.log("Testing"); //To prevent reload of page upon submission
  }

  changeMode = () => {
    const tempCompareToggle = this.state.compareToggle;
    this.setState({
      compareToggle : !tempCompareToggle
    });
  };


  render() {

    var compare = (
      <div className="maindiv">
        <Branch submit={(event) => this.showCourses(event)}></Branch>
      </div>
    );

    if(this.state.compareToggle) {
      compare = (
        <div className="maindiv">
          <Branch submit={(event) => this.showCourses(event)}></Branch>
          <Branch submit={(event) => this.showCourses(event)}></Branch>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>IITKGP Course Comparer</h1>
        <label>Compare : &nbsp;
          <input type="checkbox" onChange={this.changeMode}></input>
        </label>
        {compare}
      </div>
    );
  }
}

export default App;
