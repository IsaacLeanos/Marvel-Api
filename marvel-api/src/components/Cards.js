// import React from 'react'
// import{Col,Card,CardTitle}from'react-materialize'
// import axios from 'axios'
// import keys from '../secret'
// import './Card.css';

// class Cards extends React.Component{
    
//     state={
//         characterID:'',
//         results:[]
//     }

//     componentDidMount(){
//         console.log('cards mounted')
//     }
    
    // componentWillUnmount(){
        //     console.log('cards unmounted')
        // }
        
    // componentWillReceiveProps(props){
    //     this.setState({characterID:props.character})
    //     console.log('cards new prop',props.character)
    // }
    
    
    // getCharComics=()=>{
    //     console.log('get comics called')
    //     let id=this.state.characterID
    //     axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=25&ts=1&apikey=${keys.apiKey}&hash=${keys.hashKey}`)
    //     .then((res)=>{
    //         let results=res.data.data.results
    //         this.setState({results:results})
    //     })
    //     .catch((e)=>{
    //         console.log('cards error')
    //     })
    // }
    
    // componentDidUpdate(prevProps,prevState,nextProps) {
    //         // only update char if the data has changed
    //         if(prevState.characterID!==this.state.characterID){
    //                 // this.setState({characterID:nextProps})
    //                 this.getCharComics()
    //                 console.log('pp',prevProps,'ps',prevState)
    //             }
    //         }
            
    // render(){
    // let results=this.state.results
    // const data=results.map((i)=>{
    //         return(
    //             <Col xs={6} s={6} l={3} key={i.id}>
    //             <Card                                   header={<CardTitle reveal image={i.thumbnail.path                                                              +'/portrait_uncanny.jpg'} waves='light'/>}
    //                                                     title={i.title}
    //                                                     reveal={<p>{i.description}</p>}
    //                                                     className={'cards'}>
    //             </Card>
    //             </Col>
    //         )
    // })
    // return(
    // <div                                                style={{'border':'purple solid 1px'}}>
    // {this.state.characterID&&<p>{this.state.characterID}</p>}
    // {data}
    // </div>
    // )
    // }
// }

// export default Cards