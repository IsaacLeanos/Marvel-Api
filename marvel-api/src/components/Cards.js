import React from 'react'
import{Col,Card,CardTitle}from'react-materialize'
import axios from 'axios'

class Cards extends React.Component{

    state={
        characterID:this.props.characterID,
        results:''
    }

    componentWillReceiveProps(props){
        this.setState({characterID:props.characterID})
        console.log('id#2',props.characterID)
    }
    
    shouldComponentUpdate(nextProps){
        return this.props.characterID!==nextProps.characterID
    }

    componentDidUpdate(){
        this.getCharComics()
        console.log('dud update')
    }
    
    componentDidMount(){
        this.getCharComics()
        console.log('DID MOUNT')
    }

    getCharComics=()=>{
        let id=this.state.characterID
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
        .then((res)=>{
            console.log(res.data.data.results[0].thumbnail.path)
            let result=res.data.data.results[0].thumbnail.path
            let results=result+'portrait_xlarge.jpg'
            this.setState({results:results})
        })
        .catch((e)=>{
            if(e){
                console.log('e')
                return;
            }
        })
        // 'http://i.annihil.us/u/prod/marvel/i/mg/7/90/5b999ce416c79'
        // 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg'
}

    render(){
        return(
        <div>

        {this.state.characterID&&<p>{this.state.characterID}</p>}
        {this.state.results&&<p>{this.state.results}</p>}

        <Col l={3}>
        <Card  header={<CardTitle reveal image={this.state.results} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href={this.state.results}>This is a link</a></p>
        </Card>
        </Col>

        </div>
        )
    }
}

export default Cards