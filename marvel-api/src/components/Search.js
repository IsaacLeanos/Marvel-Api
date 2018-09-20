import React from 'react'
import{Col,Input,Icon}from'react-materialize'
import axios from 'axios'

class Search extends React.Component{

    state={
        query:'',
    }

    componentDidMount(){
        console.log('search mounted')
        // this.getCharId()
    }

    componentWillUnmount(){
        console.log('search unmounted')
    }

    getCharId(){
        let name=this.state.query
        if(!name)return;
        axios.get(`http://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
        .then((res)=>{
            let id=res.data.data.results[0].id
            this.props.searchedChar(id)
        })
        .catch((e)=>{
            // let falseChar=this.state.query
            // let correctedChar=falseChar.split('').slice(0, -1).join('')
            // this.setState({query:correctedChar})
            console.log('search e')
        })
    }

    onChange=(e)=>{
        console.log(this.state.query)
        this.setState({query:e.target.value})
    }
    
    submit=(e)=>{
        e.preventDefault()
        this.getCharId()
    }
    
    onKeyUp=(e)=>{
        this.getCharId()
    }

    render(){
        return(
        <Col l={7} offset="l2" s={12} style={{'border':'blue solid 1px'}}>
        <form               onSubmit={this.submit}>
        <Input              placeholder="Search..."
                            name='search'
                            value={this.state.query}
                            label="Marvel Character"
                            style={{'width':'400px'}}
                            onChange={this.onChange}
                            onKeyUp={this.onKeyUp}>
        <Icon>arrow_forward</Icon>
        </Input>
        </form>
        </Col>
        )
    }
}

export default Search