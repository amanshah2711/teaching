import React, {useEffect} from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

function App() {


  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data.time);
    });
  }, []);

  fetch('/make_move', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    start_point: 'd2',
    end_point: 'd4',
  })
})
  
  return (
    <Container>
    <Jumbotron id="home">
    hello
    </Jumbotron>
    </Container>
  
    
  );
}

export default App;
