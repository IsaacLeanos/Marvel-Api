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
        return axios.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
        .then((res)=>{
            let id=res.data.data.results[0].id
            console.log('id',id)
            this.setState({characterID:id})
        })
        .catch((e)=>{
            let falseChar=this.state.query
            let correctedChar=falseChar.split('').slice(0, -1).join('')
            this.setState({query:correctedChar})
        })
    }

    getCharComics(){
        // let id=this.state.characterID
        // axios.get(`http://gateway.marvel.com/v1/public/characters?characterId=${id}&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
        // .then((res)=>{
        //     console.log(res)
        // })
        console.log('here')
    }

    onChange=(e)=>{
        this.setState({query:e.target.value})
        console.log(this.state.query)
    }

    submit=(e)=>{
        e.preventDefault()
    }

    onKeyUp=(e)=>{
        this.getCharId()
        .then(this.getCharComics())
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