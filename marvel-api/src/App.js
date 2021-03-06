import React from 'react';
import './index.css';
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import{Row,Col,Card,CardTitle,Container}from'react-materialize'
/* eslint-disable import/first */
require('dotenv').config()
// import keys from './secret'
// import Cards from './components/Cards'



class App extends React.Component {

  state={
    query:'',
    characterID:null,
    image:'',
    // characterID:'',
    results:[]
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
  axios.get(`https://gateway.marvel.com/v1/public/characters?name=${query}&ts=1&apikey=${process.env.REACT_APP_AK}&hash=${process.env.REACT_APP_HK}`)
  .then((res)=>{
    this.setState({characterID:res.data.data.results[0].id,
    image:res.data.data.results[0].thumbnail.path+'/portrait_uncanny.jpg'
    })
    return res.data.data.results[0].id
  })
  .then((id)=>{
    this.getCharComics(id)
  })
  .catch((e)=>{
    // let falseChar=this.state.query
    // let correctedChar=falseChar.split('').slice(0, -1).join('')
    // this.setState({query:correctedChar})
    console.log('search e')
  })
}

getCharComics=(id)=>{
  console.log('get comics called')
  axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=16&ts=1&apikey=${process.env.REACT_APP_AK}&hash=${process.env.REACT_APP_HK}`)
  .then((res)=>{
      let results=res.data.data.results
      this.setState({results:results})
  })
  .catch((e)=>{
      console.log('cards error')
  })
}



  render() {
    // var css={
    //   image: `url(${this.state.image})`,
    // }

    // style={css}
    let results=this.state.results
    const data=results.map((i)=>{
            return(
                <Col xs={6} s={6} l={3} key={i.id}>
                <Card                                   className={'card-image card-content'} header={<CardTitle reveal image={i.thumbnail.path                                                               +'/portrait_uncanny.jpg'} waves='light'/>}
                                                        // title={i.title}
                                                        reveal={<div><h3>{i.title}</h3><p>{i.description}</p></div>}>
                </Card>
                </Col>
            )
    })
    
    return (
      <div               >

      <Row               className={Row} style={{'border':'red solid 1px'}}>
      <Search            searchChange={this.searchChange}/>
      </Row>

      <Row               className={Row} style={{'border':'red solid 1px'}}>
      {this.state.characterID&&<p>{this.state.characterID}</p>}
      {data}
      </Row>

      </div>
      )
    }
  }
  // character={this.state.characterID}
  
  export default App;
  