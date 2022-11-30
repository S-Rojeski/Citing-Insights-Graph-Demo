import React, { Component } from 'react';
import '/node_modules/react-vis/dist/style.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  MarkSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend
} from 'react-vis';

class Graphs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //Graph displayed changes based on the number (0-2)
      //0 = Bar Graph, 1 = 'Deviation Graph', 2 = Scatter Plot Graph
      // NOTE: Don't need to redeclare the variable as it is updated from the parent, don't store it locally.
        //Declaring data values
        barData: [{}],
        barData2: [{}], //Data set 2 for the Bar Graph
      
        scatterData: [{}],
        scatterData2: [{}], //Data set 2 for the Scatter Graph
        //xaxis: 0
    }
    this.setXAxis = this.setXAxis.bind(this)
    // Functional area for defining bar data
    //Counts the number of Objects from the data above and stores it in 'xaxis'
    this.setXAxis()
  } // End of constructor

  setXAxis() {
    // Reset declared data
    // this.setState({xaxis: 0});
    this.setState({barData: this.state.barData.splice(0,this.state.barData.length)});
    this.setState({barData2: this.state.barData2.splice(0,this.state.barData2.length)});
    this.setState({barData: this.state.scatterData.splice(0,this.state.scatterData.length)});
    this.setState({barData2: this.state.scatterData2.splice(0,this.state.scatterData2.length)});
    // for (let i = 0; i < this.props.assignmentGetData.length; i++) {
    //   console.log('GraphDisplay setting x value again');
    //   this.state.xaxis++;
    // }
    // this.props.assignmentGetData.forEach(element => {
    //   this.state.xaxis++;
    // });

    //Populating Bar Graph with random generated y values.
    // for(var x = 0; x < this.state.xaxis; x++) {
    //   this.state.barData[x] = { x: x, y: Math.floor(Math.random() * 6) + 1 };
    //   console.log('current  bar1 vals are: ',this.state.barData);
    // };
    // FOREACH version of above
    this.props.assignmentGetData.forEach((element, index) => {
      this.state.barData.splice(index, 1,{x: index+1, y: Math.floor(Math.random() * 3) + 1});
    });

    //Higher Grades
    // for(var x = 0; x < this.state.xaxis; x++) {
    //   this.state.barData2[x] = { x: x, y: Math.floor(Math.random() * 3) + 1 };
    //   console.log('current bar2 vals are: ',this.state.barData2);
    // };
    // FOREACH version of above
    this.props.assignmentGetData.forEach((element, index) => {
      this.state.barData2.splice(index, 1,{x: index+1, y: Math.floor(Math.random() * 6) + 1});
    });
    //Populating Scatter Plot Graph with random generated y values.
    // for(var x = 0; x < this.state.xaxis; x++) {
    //   this.state.scatterData[x] = { x: x, y: Math.floor(Math.random() * 6) + 1 };
    // };
    this.props.assignmentGetData.forEach((element, index) => {
      this.state.scatterData.splice(index, 1,{x: index, y: Math.floor(Math.random() * 3) + 1});
    });
    //Higher Grades
    // for(x = 0; x < this.state.xaxis; x++) {
    //   this.state.scatterData2[x] = { x: x, y: Math.floor(Math.random() * 2) + 1 };
    // };
    this.props.assignmentGetData.forEach((element, index) => {
      this.state.scatterData2.splice(index, 1,{x: index, y: Math.floor(Math.random() * 6) + 1});
    });
    console.log('Data should be set by this point. Here is what it all looks like...',this.state.barData,this.state.barData2,this.state.scatterData,this.state.barData2);
  }

  // Declare componentDidUpdate - runs when the props update then compares them and we can force rerender
  componentDidUpdate(prevProps) {
    if (prevProps.assignmentGetData !== this.props.assignmentGetData) {
      this.setXAxis();
    };
   }

  //Bar Graph Display
  render() {
    if (Number(this.props.graphType) === 0) {
      return (
        <div>
          <XYPlot width={500} height={500} stackBy="y" xType="ordinal" yType="linear" dontCheckIfEmpty={true}>
            <DiscreteColorLegend
              style={{ position: 'absolute', left: '50px', top: '-50px' }}
              orientation="horizontal"
              items={[
                {
                  title: 'Average Grades',
                  color: '#12939A'
                },
                {
                  title: 'Higher Grades',
                  color: '#79C7E3'
                }
              ]} />
            <VerticalGridLines />
            <HorizontalGridLines />

            <XAxis tickFormat={d => {
              return "Paper" + " " + d;
            }} tickTotal={this.state.barData.length} tickLabelAngle={-45}/>
            <YAxis />
            <VerticalBarSeries data={this.state.barData} />
            <VerticalBarSeries data={this.state.barData2} />

          </XYPlot>
        </div>
      )
    }

    //Scatter Plot Display
    if (Number(this.props.graphType) === 1) {
      return (
        <div>
          <XYPlot width={500} height={500}>
            <DiscreteColorLegend
              style={{ position: 'absolute', left: '50px', top: '-50px' }}
              orientation="horizontal"
              items={[
                {
                  title: 'Higher Grades',
                  color: '#12939A'
                },
                {
                  title: 'Average Grades',
                  color: '#79C7E3'
                }
              ]} />
            
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickTotal={this.props.assignmentGetData.length} />
            <YAxis />
            <MarkSeries data={this.state.scatterData} />
            <MarkSeries data={this.state.scatterData2} />
          </XYPlot>
        </div>
      )
    }
  }
}

export default Graphs


