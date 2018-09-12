import React from 'react'
import{Col,Card,CardTitle}from'react-materialize'

class Cards extends React.Component{

    state={}

    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        let name='thor'
        fetch(`http://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=7c1f96a95f1a624e70019ff7c43bd5c3&hash=dfddec6c4f447f7fe958fba16b941320`)
        .then((res)=>{console.log(res.json())})
    }

    render(){
        return(
        <div>

        <Col l={3}>
        <Card  header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
        </Card>
        </Col>

        <Col l={3}>
        <Card  header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
        </Card>
        </Col>
        <Col l={3}>
        <Card  header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
        </Card>
        </Col>
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