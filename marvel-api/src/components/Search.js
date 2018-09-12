import React from 'react'
import{Col,Input,Icon}from'react-materialize'
import axios from 'axios'

class Search extends React.Component{

    state={
        query:'',
        characterID:null
    }

    // componentDidMount(){
    //     this.fetchData()
    // }

    getCharId(){
        let name=this.state.query
        axios.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
        .then((res)=>{
            let id=res.data.data.results[0].id
            this.setState({characterID:id})
            console.log('id1',id)
            return id
        })
        .catch((e)=>{
            let falseChar=this.state.query
            let correctedChar=falseChar.split('').slice(0, -1).join('')
            this.setState({query:correctedChar})
        })
        .then((id)=>{
            console.log('id2',id)
            axios.get(`http://gateway.marvel.com/v1/public/characters?characterId=${id}&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
            .then(()=>{
                console.log('here')
            })
            .catch((e)=>{console.log('err2',e)})
            // this.getCharComics(id)
        })
        .catch((e)=>{console.log('err3',e)})
    }

    // getCharComics(id){
    //    return axios.get(`http://gateway.marvel.com/v1/public/characters?characterId=${id}&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
    // }

    onChange=(e)=>{
        this.setState({query:e.target.value})
        console.log(this.state.query)
    }

    submit=(e)=>{
        e.preventDefault()
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