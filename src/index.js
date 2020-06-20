import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notes from './Notes';
import Teaching from './Teaching';
import Sample from './Sample';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Row, Col, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
const routing = (
  <Router>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={10}>
            <Navbar variant='primary'>
                <Navbar.Brand>AMAN SHAH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Link to='/'>Teaching</Link>
                  </Nav> 
                </Navbar.Collapse>
            </Navbar>

          </Col>
        </Row>
        <hr className="col-md-10" style={{marginTop:0}}></hr>
        <Route path='/' component={Teaching} />
        <Route path='/notes' component={Notes} />
        <Route path='/sample' component={Sample} />
      </Container>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
