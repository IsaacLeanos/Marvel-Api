import React from 'react';
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import Cards from './components/Cards'
import{Row}from'react-materialize'
import keys from './secret'



class App extends React.Component {

  state={
    query:'',
    characterID:null,
    image:''
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
  if(!query)return;
  axios.get(`http://gateway.marvel.com/v1/public/characters?name=${query}&ts=1&apikey=${keys.apiKey}&hash=${keys.hashKey}`)
  .then((res)=>{
    this.setState({characterID:res.data.data.results[0].id,
    image:res.data.data.results[0].thumbnail.path+'/portrait_uncanny.jpg'
    })
  })
  .catch((e)=>{
    // let falseChar=this.state.query
    // let correctedChar=falseChar.split('').slice(0, -1).join('')
    // this.setState({query:correctedChar})
    console.log('search e')
  })
}

  render() {
    // var css = {backgroundImage: 'url('+backgroundURL+') no-repeat center center', backgroundSize: backgroundSize, backgroundColor: backgroundColor};
    var css={
      backgroundImage: `url(${this.state.image})`,
      // backgroundSize:'cover',
      backgroundPosition:'center'
    }
    return (
      <div               className='container backgroundImage' style={css}>
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
  