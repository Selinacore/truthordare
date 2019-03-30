import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Container } from "reactstrap";
import Buttons from "./components/Buttons";
import truthordares from "./truthordares.json"
import Dare from "./components/Dare";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state={
    truthordares,
    selectedDare: ""
  }
  handleButtonClick=()=> {
    var myDare= truthordares[Math.floor(Math.random()* truthordares.length)];
    console.log(myDare); 
    this.setState({
      selectedDare: myDare
    })

  }
  render() {
    return (
      <Container>
       <Jumbotron/>
       <Wrapper>
       <Buttons
       myDare={this.state.selectedDare.dare}
       onClick={this.handleButtonClick}/>
       </Wrapper>
      <Dare/>
      </Container>
    );
  }
}

export default App;
