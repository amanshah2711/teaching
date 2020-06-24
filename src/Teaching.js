import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {Table, Badge, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Teaching extends React.Component{
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <h3 style={{color:"#047BFE"}}>CS61A Summer 2020</h3>
                        <p></p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={5}>
                           <p> <b>Discussion:</b> Wed/Fri 7:30AM - 9:00AM PDT</p>
                           <p> <b>Office Hours:</b> TBD </p>
                           <p><b><a href="https://docs.google.com/forms/d/e/1FAIpQLSe051PwRPnKIJ9zPWQhA-6VBW3PgnyunvbA6cT75uswLXWJPQ/viewform">Anonymous Feedback Form</a></b></p>
                    </Col>
                    <Col md={5}>
                        <ul>
                            <li>
                                <p> Feel free to contact me at amanshah2711@berkeley.edu with any questions about cs61a, math, life at Berkeley, or anything else.</p>
                            </li>
                            <li>
                                Additional resources or helpful links located at the bottom of the page.
                            </li>
                        </ul>

                    </Col>
                </Row>
                <hr className="col-md-10"></hr>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <h3 style={{color:"#047BFE"}}>Schedule</h3>
                                <Table striped borderless hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Date</th>
                                            <th>Topic</th>
                                            <th>Worksheet</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td>Wed 6/22</td>
                                            <td>Welcome to 61A! <Badge variant='primary'> <a href="teaching/slides/disc_00.pdf"></a>slides</Badge></td>
                                            <td>Disc 00 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Fri 6/26</td>
                                            <td>Environment Diagrams, Control, Self Reference <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 01 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Wed 7/1</td>
                                            <td>Higher-Order Functions <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 02 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Fri 7/3</td>
                                            <td>N/A<Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 03 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Wed 7/8</td>
                                            <td>Recursion, Tree Recursion <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 04 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Fri 7/10</td>
                                            <td>Trees, Mutability <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 05 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Wed 7/15</td>
                                            <td>Midterm Review, Iterators and Generators<Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 06 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Fri 7/17</td>
                                            <td>N/A<Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 07 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Wed 7/22</td>
                                            <td>Object-Oriented Programming(OOP), Nonlocal <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 08 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Fri 7/24</td>
                                            <td>Linked Lists, Trees <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 09 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Wed 7/29</td>
                                            <td>Scheme, Scheme Lists <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 10 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>Fri 7/31</td>
                                            <td>Interpreters <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 11 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>Wed 8/5</td>
                                            <td>Macros <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 12 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>Fri 8/7</td>
                                            <td>SQL <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 13 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td>Wed 8/12</td>
                                            <td>Final Review <Badge variant='primary'>slides</Badge></td>
                                            <td>Disc 14 <Badge variant='primary'>solution</Badge></td>
                                        </tr>
                                    </tbody>
                                   
                                </Table>
                    </Col>
                </Row>
                <hr className="col-md-10"></hr>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                    <h3 style={{color:"#047BFE"}}>Additional Resources</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Teaching