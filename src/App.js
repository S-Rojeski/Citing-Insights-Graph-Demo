import React, {Component} from 'react';

import './App.css';
import BottomNavBar from './Components/BottomNavBar/BottomNavBar';
import Navibar from './Components/Navibar/Navibar';
import CourseworkGraph from './Components/CourseworkGraph/CourseworkGraph'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        configurations: {
          primaryColor: '#009220',
          secondaryColor: '#4B79DC',
          institutionName: "Cal Poly Humboldt"
        }
    };
  }


  render() {
      return (
      <div className="App">
        <Navibar configurations={this.state.configurations}/>
        <CourseworkGraph configuration={this.state.configurations}/>
        <BottomNavBar configurations={this.state.configurations}/>
      </div>
    );
  }
}

export default App;