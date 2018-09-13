import React from 'react'
import{Col,Card,CardTitle}from'react-materialize'
import axios from 'axios'

class Cards extends React.Component{

    state={
        characterID:this.props.characterID
    }

    componentWillReceiveProps(props){
        this.setState({characterID:props.characterID})
        console.log('id#2',props.characterID)
    }

    componentDidMount(){
        this.getCharComics()
    }

    // componentDidMount(){
    //     this.getCharComics()
    // }

    getCharComics=()=>{
        let id=this.state.characterID
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
        .then((res)=>{
            console.log(res.data.data.results[0].title)
        })
        .catch((e)=>{
            // if(e){

            // }
            console.log(e)
        })
    }
    

    render(){
        return(
        <div>

        {this.state.characterID&&<p>{this.state.characterID}</p>}

        <Col l={3}>
        <Card  header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
        </Card>
        </Col>

        </div>
        )
    }
}

export default Cards