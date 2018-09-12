import React from 'react'
import{Col,Card,CardTitle}from'react-materialize'

class Cards extends React.Component{

    state={}

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