import React, { Component } from 'react';
import { Grid, Table, Panel } from 'react-bootstrap';
import axios from 'axios';

//import logo from './logo.svg';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState( { time: new Date() } )
    }, 1000);
  }

  render() {
    return (
      <div className="App-date">
        {this.state.time.toTimeString()}<br/>
        {this.state.time.toDateString()}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facets: []
    };
  }
  
  getData() {
    axios.get(`https://13knr5az7l.execute-api.us-west-2.amazonaws.com/prod`, {headers: { 'Accept': 'application/json' }})
      .then(res => {
        this.setState({ facets: res.data.facets });
    });
  }

  componentDidMount() {
    this.getData();

    // Polling: gross.
    setInterval(() => {
      this.getData();
    }, 30000);
  }
  
  render() {
    return (
      <div>
        <Grid>
          <div className="App-header">
            <div className="App-headertext">REGIONAL OBSERVATIONS</div>
            <Clock/>
          </div>
          <Panel>
            <Table className="App-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>CPU</th>
                    <th>LOAD AVG</th>
                    <th>WEATHER</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.facets.map(facet =>
                    <tr key={facet.name}>
                      <td></td>
                      <td>{facet.name}</td>
                      <td>{facet.results[0].average.toFixed(2)}</td>
                      <td>{facet.results[1].average.toFixed(2)}</td>
                      <td>{facet.results[0].average > 85 ? 'STORMY' : 'CLEAR'}</td>
                  </tr>
                  )}
                </tbody>
            </Table>
          </Panel>
          <div className="App-marketingfooter">
            <a href="https://newrelic.com/infrastructure">Data from EC2 hosts running on AWS. Learn more about New Relic Infrastructure.</a>
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;