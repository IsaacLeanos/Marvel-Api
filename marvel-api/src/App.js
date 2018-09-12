import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Cards from './components/Cards'
import{Row}from'react-materialize'


class App extends Component {
  render() {
    return (
      <div               className='container'>
      <Row style={{'border':'red solid 1px'}}>
      <Search/>
      </Row>
      <Row style={{'border':'red solid 1px'}}>
      <Cards/>
      </Row>
      </div>
    )
  }
}

export default App;
