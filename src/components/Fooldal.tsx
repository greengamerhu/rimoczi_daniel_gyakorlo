import 'bootstrap/dist/css/bootstrap.css';

import { Component, ReactNode } from "react";

import { Col, Container, Row } from "react-bootstrap";

export default class Fooldal extends Component {
    render(): ReactNode {
        return <Container>
            <Row >
                <Col className='text-center mt-5'>
                    <h1> Üdvözöljük a Petrik Webhely-gyár oldalán! </h1>
                    <h3 style={{color : "green"}}>Válasszon a fenti menüpontok közül!</h3>
                </Col>
            </Row>

        </Container>
       
 
    }
}