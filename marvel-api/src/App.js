import React from 'react';
import './App.css';
import Search from './components/Search'
import Cards from './components/Cards'
import{Row}from'react-materialize'


class App extends React.Component {

  state={
    character:''
  }

  searchedChar=(characterID)=>{
    this.setState({character:characterID})
    console.log('searchedCar')
  }

  componentDidMount(){
    console.log('app mounted')
  }

  componentWillUnmount(){
    console.log('app unmounted')
}

  render() {
    return (
      <div               className='container'>
      <Row style={{'border':'red solid 1px'}}>

      <Search            searchedChar={this.searchedChar}/>
      
      </Row>
      <Row style={{'border':'green solid 1px'}} className={'row'}>
      
      <Cards             characterID={this.state.character}/>
      
      </Row>
      </div>
    )
  }
}

export default App;
