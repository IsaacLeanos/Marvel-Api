import React from 'react'
import{Col,Input,Icon}from'react-materialize'

class Search extends React.Component{

    state={

    }

    render(){
        return(
        <Col l={7} offset="l2" s={12} style={{'border':'blue solid 1px'}}>
        <Input              placeholder="Search..."  
                            label="Marvel Character"
                            style={{'width':'400px'}}>
        <Icon>arrow_forward</Icon>
        </Input>
        </Col>
        )
    }
}

export default Search