import React, { Component } from 'react';

import './App.css';
import BottomNavBar from './Components/BottomNavBar/BottomNavBar';
import Navibar from './Components/Navibar/Navibar';
import CourseworkGraph from './Components/CourseworkGraph/CourseworkGraph';
import Home from './Components/homePage/home';
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf';

import { Button, Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configurations: {
        primaryColor: '#009220',
        secondaryColor: '#4B79DC',
        institutionName: "Cal Poly Humboldt"
      }
    };
  }


  render() {

    function exportPDF() {
      const input = document.getElementById("capture")
      html2canvas(input, { letterRendering: 1, allowTaint: true, useCORS: true, onrendered: function (canvas) { } }).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('img/png');
        const pdf = new JsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save("graphexport.pdf")
      })
    }
    return (

      <Router>
        <div className="App">
          <Navibar configurations={this.state.configurations} />

          <div className="content">
            <Switch>

              <Route exact path="/">
                <Home configuration={this.state.configurations} />
              </Route>

              <div id='capture' >
              <Route exact path="/barchart">
                <CourseworkGraph configuration={this.state.configurations}/>

                <Grid item xs={12} py={5} display="flex" justifyContent="center" alignItems="center">
                  <Button onClick={exportPDF} variant="contained">Export PDF</Button>
                </Grid>
              </Route>
              </div>

            </Switch>

          </div>

          <BottomNavBar configurations={this.state.configurations} />
        </div>
      </Router>
    );
  }
}

export default App;