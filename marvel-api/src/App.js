import React from 'react';
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import Cards from './components/Cards'
import{Row}from'react-materialize'


class App extends React.Component {

  state={
    query:'',
    characterID:null
  }

  componentDidMount(){
    console.log('app mounted')
  }

  componentWillUnmount(){
    console.log('app unmounted')
}

searchChange=(e)=>{
  console.log('search box',e.target.value)
  this.setState({query:e.target.value})
  this.getCharId(e.target.value)
}

getCharId=(query)=>{
  // if(!name)return;
  axios.get(`http://gateway.marvel.com/v1/public/characters?name=${query}&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
  .then((res)=>{
    this.setState({characterID:res.data.data.results[0].id})
  })
  .catch((e)=>{
    // let falseChar=this.state.query
    // let correctedChar=falseChar.split('').slice(0, -1).join('')
    // this.setState({query:correctedChar})
    console.log('search e')
  })
}

  render() {
    return (
      <div               className='container'>
      <Row style={{'border':'red solid 1px'}}>

      <Search            searchChange={this.searchChange}/>
      
      </Row>
      <Row style={{'border':'green solid 1px'}} className={'row'}>
      
      <Cards             character={this.state.characterID}/>
      
      </Row>
      </div>
      )
    }
  }
  
  export default App;
  