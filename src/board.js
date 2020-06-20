import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Alert, Button, ButtonGroup, NavDropdown, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Square extends React.Component {
    render() {
      return (
        <Button variant="outline-dark" size="lg" className="square" onClick={function(){
            alert('click');}}>
          {this.props.value}
        </Button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            < ButtonGroup>

            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </ButtonGroup>

          </div>
          <div className="board-row">
              <ButtonGroup>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </ButtonGroup>
          </div>
          <div className="board-row">
          <ButtonGroup>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </ButtonGroup>
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
export default Board;