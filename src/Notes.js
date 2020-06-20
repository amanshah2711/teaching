import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {Card, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Notes extends React.Component{
    render() {
        return (
            <Container>
                <CardColumns>
                    <Card>
                        <Card.Header>Introductory Calculus</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>
                                    Lecture 1
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Real Analysis</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>
                                    Lecture 1
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Topology</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>
                                    Lecture 1
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Measure Theory</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>
                                    Lecture 1
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Functional Analysis</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>
                                    Lecture 1
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>




                </CardColumns>
            </Container>
        )
    }
}

export default Notes