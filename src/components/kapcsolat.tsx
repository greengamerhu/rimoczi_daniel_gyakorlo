import 'bootstrap/dist/css/bootstrap.css';

import { Component, ReactNode } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface State {
    emailInput : string,
    textInput : string,
    errormsg : string,
    mgsColor : string
}

export default class Kapcsolat extends Component<{}, State> {
    constructor(props : {}) {
        super(props)
        this.state = {
            emailInput : "",
            textInput : "", 
            errormsg : "",
            mgsColor : "red"

        }
      }
    handleForm = () => {
        const  {emailInput, textInput, errormsg} = this.state
        if(emailInput.trim() == "") {
            this.setState({errormsg : "az email nem lehet üres"})
            return
        }
        if(textInput.trim() == "") {
            this.setState({errormsg : "az szöveg nem lehet üres"})
            return
        }
        this.setState({errormsg : "Köszönjük", mgsColor : "green"})
        
    }

    render(): ReactNode {
        return <Container>
            
            <Row className='d-flex justify-content-center'>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={this.state.emailInput} onChange={e => this.setState({emailInput : e.currentTarget.value})}/>
                </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label>Írjon nekünk: </Form.Label>
                 <Form.Control as="textarea" rows={3} value={this.state.textInput} onChange={e => this.setState({textInput : e.currentTarget.value})}/>
      </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      </Form.Group>
      <Button style={{width : "100%"}}  onClick={this.handleForm}>elküld</Button>
      
    </Form>
            </Row>
            <Row className='text-center'>
           <h1 style={{color :  this.state.mgsColor}}>{this.state.errormsg}</h1>

            </Row>
        </Container>
       
 
    }
}