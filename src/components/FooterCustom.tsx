import React, { Component, ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


export default class Footer extends Component {
    render(): ReactNode {
        return <footer className="text-center">
            <p>Készitette: Rimoczi Daniel</p>
        </footer>
    }
}
