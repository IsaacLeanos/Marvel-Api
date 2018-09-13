import React from 'react';
import './App.css';
import Search from './components/Search'
import Cards from './components/Cards'
import{Row}from'react-materialize'


class App extends React.Component {

  state={
    character:1009351
  }

  searchedChar=(characterID)=>{
    this.setState({character:characterID})
  }

  render() {
    return (
      <div               className='container'>
      <Row style={{'border':'red solid 1px'}}>

      <Search            searchedChar={this.searchedChar}/>
      
      </Row>
      <Row style={{'border':'red solid 1px'}}>
      
      <Cards             characterID={this.state.character}/>
      
      </Row>
      </div>
    )
  }
}

export default App;
