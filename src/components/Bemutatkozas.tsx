import 'bootstrap/dist/css/bootstrap.css';
import { profile } from 'console';

import { Component, ReactNode } from "react";

import { Col, Container, Row } from "react-bootstrap";
export default class Bemutatkozas extends Component {
    render(): ReactNode {
        return <Container fluid>
            <Row >
                <Col className='text-center' >
                    <h1>Történet</h1>    
                    <p>A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.</p>
                    <p>2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.</p>
                </Col>
            </Row>
            <Container>
            <Row >
                <Col className='text-center'>
                    <h1>Jelenlegi tagjaink</h1>
                </Col>
            </Row>
            <Row >
                <Col className=''>
                    <ul style={{fontSize : '30px' }}>
                        <li>Erdős Ildikó</li>
                        <li>Jónás Viola</li>
                        <li>Kató Anna</li>
                        <li>Pintér Koppány</li>
                        <li>Sas Gizi</li>
                    </ul>
                </Col>
                <Col className='text-end'>
                    <img  style={{width : '150px'}} src={'./profile.png'} alt='' />
                    
                </Col>
            </Row>
            </Container>

        </Container> 
    }}