import React from 'react'
import{Col,Input,Icon}from'react-materialize'

const Search=({searchChange})=>{
   
        return(
        <Col l={7} offset="l2" s={12} style={{'border':'blue solid 1px'}}>
        <Input              placeholder="Search..."
        name='search'
        label="Marvel Character"
        style={{'width':'400px'}}
        onChange={searchChange}>
        <Icon>arrow_forward</Icon>
        </Input>
        </Col>
        )
}

export default Search