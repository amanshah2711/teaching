import React, {useState} from 'react';
import './App.css';
import logo from './github.png';
import white_pawn from './white_pawn.svg'
import black_pawn from './black_pawn.svg'
import board_im from './icon_queen.jpg'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Button, Card, CardDeck, Modal, Image as Img, OverlayTrigger, Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import './board.png'
import white_queen from './sprites/white_queen.svg';
import black_queen from './sprites/black_queen.svg';
import white_king from './sprites/white_king.svg';
import black_king from './sprites/black_king.svg';
import white_bishop from './sprites/white_bishop.svg';
import black_bishop from './sprites/black_bishop.svg';
import white_knight from './sprites/white_knight.svg';
import black_knight from './sprites/black_knight.svg';
import white_rook from './sprites/white_rook.svg';
import black_rook from './sprites/black_rook.svg';

const BOARD_PAD = 20;
const PIECE_SIZE = 45;
function preloadImage(url){
    var img = new Image();
    img.src=url;
}
var pieces ={
    'bking' : new Image(),
    'wking' : new Image(),
    'bqueen' : new Image(),
    'wqueen' : new Image(),
    'bbishop' : new Image(),
    'wbishop' : new Image(),
    'bknight' : new Image(),
    'wknight' : new Image(),
    'brook' : new Image(),
    'wrook' : new Image()
}
function draw(){
function pre(){
pieces['bking'].src = black_king
pieces['bqueen'].src = black_queen
pieces['bbishop'].src = black_bishop
pieces['bknight'].src = black_knight
pieces['brook'].src = black_rook

pieces['wking'].src = white_king
pieces['wqueen'].src = white_queen
pieces['wbishop'].src = white_bishop
pieces['wknight'].src = white_knight
pieces['wrook'].src = white_rook
    pieces['bking'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 4 * blockSide, BOARD_PAD, blockSide, blockSide)
    }
    pieces['bqueen'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 3 * blockSide, BOARD_PAD, blockSide, blockSide)
    }
    pieces['bbishop'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 2 * blockSide, BOARD_PAD, blockSide, blockSide)
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 5 * blockSide, BOARD_PAD, blockSide, blockSide)
    }
    pieces['bknight'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 1 * blockSide, BOARD_PAD, blockSide, blockSide)
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 6 * blockSide, BOARD_PAD, blockSide, blockSide)
    }
    pieces['brook'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 0 * blockSide, BOARD_PAD, blockSide, blockSide)
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 7 * blockSide, BOARD_PAD, blockSide, blockSide)
    }
    pieces['wking'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 4 * blockSide, BOARD_PAD+ 7 * blockSide, blockSide, blockSide)
    }
    pieces['wqueen'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 3 * blockSide, BOARD_PAD+ 7 * blockSide, blockSide, blockSide)
    }
    pieces['wbishop'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 2 * blockSide, BOARD_PAD+ 7 * blockSide, blockSide, blockSide)
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 5 * blockSide, BOARD_PAD+ 7 * blockSide, blockSide, blockSide)
    }
    pieces['wknight'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 1 * blockSide, BOARD_PAD+ 7 * blockSide, blockSide, blockSide)
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 6 * blockSide, BOARD_PAD+ 7 * blockSide, blockSide, blockSide)
    }
    pieces['wrook'].onload = function (){
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 0 * blockSide, BOARD_PAD+ 7 * blockSide, blockSide, blockSide)
        ctx.drawImage(this,  0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + 7 * blockSide, BOARD_PAD+ 7 * blockSide, blockSide, blockSide)
    }
}
    var c = document.createElement("canvas");
    c.id="chessboard"
    var temp = document.getElementById("game_loc")
    console.log()
    document.getElementById("test").style.maxWidth="60%";
    //c.style.width="60%";
    const BOARD_SIZE = c.width;
    c.width = c.height = BOARD_SIZE;
    temp.appendChild(c);
    var ctx = c.getContext("2d");
    ctx.lineWidth =1;
    var startX = 0, startY = 0;
    var count = 0;
    var blockSide = (BOARD_SIZE - 2 * BOARD_PAD) / 8;
    for (var i = 0; i < 8; i += 1){
        for (var j = 0; j < 8; j += 1){
            startX = blockSide * i + BOARD_PAD;
            startY = blockSide * j + BOARD_PAD;
            if (count % 2 === 0){
                ctx.fillStyle = (i % 2 === 0) ? "#edd0a7" : "#B58962";
            } else {
                ctx.fillStyle = (i % 2 === 0) ? "#B58962" : "#edd0a7";
            }
            ctx.fillRect(startX, startY, blockSide, blockSide);
            count = (count % 2 === 0) ? 1 : 0;

        }
    }

    
    for (i = 0; i <= 8; i++){
        for (j = 0; j <= 8; j++){
            ctx.beginPath()
            ctx.moveTo(BOARD_PAD, blockSide * j + BOARD_PAD); 
            ctx.lineTo(BOARD_SIZE - BOARD_PAD, blockSide * j + BOARD_PAD);
            ctx.stroke(); // Draws horizontal bars

            ctx.beginPath()
            ctx.moveTo(blockSide * i + BOARD_PAD, BOARD_PAD);
            ctx.lineTo(blockSide * i + BOARD_PAD, BOARD_SIZE - BOARD_PAD);
            ctx.stroke(); // Draws vertical bars

            }
        }

    var test = new Image();
    test.src = white_pawn;
    console.log(test.complete);
    var test2 = new Image();
    test2.src = black_pawn;
    test.onload = function(){
        for (i = 0; i < 8; i++){
            ctx.drawImage(this, 0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + i * blockSide, BOARD_PAD + 6 * blockSide, blockSide, blockSide);
        }
    }
    test2.onload = function(){
        for (i = 0; i < 8; i++){
            ctx.drawImage(this, 0, 0, PIECE_SIZE, PIECE_SIZE, BOARD_PAD + i * blockSide, BOARD_PAD + blockSide, blockSide, blockSide);
        }
    }

    pre();

    function clicker(event){
        var elemLeft = this.offsetLeft + this.clientLeft;
        var elemTop = this.offsetTop + this.clientTop;
        var x = event.pageX - 0, y = event.pageY - 0;
        var xCoord = Math.floor(x  / ((this.width -  1* BOARD_PAD)/8))
        var yCoord = Math.floor(y / ((this.height-  1* BOARD_PAD)/8))
        console.log(xCoord, yCoord)
    }
    c.addEventListener('click', clicker, false);




        

}
function Sample() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function startTask(){
    preloadImage(white_pawn);
    preloadImage(black_pawn);
    }
    function renderTooltip(props) {
        return (
          <Tooltip id="button-tooltip" {...props}>
            Github
          </Tooltip>
        );
      }
  return (
    <Container>
        <CardDeck>
            <Card style={{overflow:'none'}}>
                <Card.Img variant="top" src={board_im}/>
                <Card.Body>
                    <Card.Title>Chess Board Game</Card.Title>
                    <Card.Text>
                        This is an implementation of chess using Python for all the logic to illustrate how far simple ideas can go.
                    </Card.Text>
                    </Card.Body>
                <Card.Footer style={{verticalAlign:'middle'}}>
                    <Button variant='primary' onClick={handleShow}>Play Game</Button>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">GitHub!</Tooltip>}>
				<span className="d-inline-block" style={{float:'right'}}>
                <Img src={logo} width="40" height="40" style={{float:'right'}}>
            </Img>
				</span>
			</OverlayTrigger> 
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
        <Modal id='test' show={show} onHide={handleClose} onEnter={startTask} onEntering={draw} onEntered={startTask}>
        <Modal.Header closeButton>
          <Modal.Title>Chess</Modal.Title>
        </Modal.Header>
        <Modal.Body id="game_loc" onLoad={()=>console.log('Trying to see')} style={{textAlign: 'center'}}>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
    </Container>
  
    
  );
}

export default Sample;
