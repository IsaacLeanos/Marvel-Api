import React from 'react'
import{Col,Card,CardTitle}from'react-materialize'
import axios from 'axios'
import './Card.css';

class Cards extends React.Component{
    
    state={
        characterID:this.props.characterID,
        results:[]
    }

    componentDidMount(){
        console.log('cards mounted')
        // this.getCharComics()
    }

    // componentWillUnmount(){
    //     console.log('cards unmounted')
    // }

    componentWillReceiveProps(props){
        this.setState({characterID:props.characterID})
        console.log('cards new prop',props.characterID)
    }
        
    componentDidUpdate(){
        console.log('cards updated')
        this.getCharComics()
    }

    getCharComics=()=>{
        let id=this.state.characterID
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=25&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
        .then((res)=>{
            let results=res.data.data.results
            this.setState({results:results})
        })
        .catch((e)=>{
                console.log('cards error')
        })
    }
        
    render(){
        const results=this.state.results
        const data=results.map((i)=>{
                return(
                    <Col xs={12} s={12} l={3} key={i.id}>
                    <Card                                   header={<CardTitle reveal image={i.thumbnail.path                                                          +'/portrait_uncanny.jpg'} waves='light'/>}
                                                            title={i.title}
                                                            reveal={<p>{i.description}</p>}
                                                            className={'cards'}>
                    </Card>
                    </Col>
                )
        })
        return(
        <div >
        {this.state.characterID&&<p>{this.state.characterID}</p>}
        {data}
        </div>
        )
    }
}

export default Cards