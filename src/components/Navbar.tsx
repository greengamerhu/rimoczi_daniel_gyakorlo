import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export  default class Navbar extends React.Component {
    render(): React.ReactNode {
        return <Nav>
              <Nav.Item>
                <Nav.Link>
                <Link to="/">Főoldal</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                <Link to="bemutatkozas">Bemutatkozás</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                <Link to="kapcsolat">Kapcsolat</Link>
                </Nav.Link>
            </Nav.Item>

        </Nav>        
    }
}