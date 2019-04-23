import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Container } from "reactstrap";
import Buttons from "./components/Buttons";
import truthordares from "./truthordares.json"
import Dare from "./components/Dare";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content"; 


class App extends Component {
  state={
    truthsArray: [],
    daresArray: [],
    truthordares: [...truthordares],
    selectedDare: ""
  }
  componentDidMount() {
    this.sortTruthOrDare();
  }
  sortTruthOrDare = () => {
    var theTruths = [];
    var theDares = [];
    for (let i = 0; i<truthordares.length;i++) {
      if (truthordares[i].isADare === true) {
        theDares.push(truthordares[i])
      }else if (truthordares[i].isADare === false) {
        theTruths.push(truthordares[i])
      }
    }
    this.setState({
      truthsArray: [...theTruths],
      daresArray: [...theDares]
    }) 
    console.log(this.state);
    return this.state;
  }
  handleButtonClick=(event)=> {
    var dareValue = event.target.getAttribute("data-darevalue");
    var myDare;
    if (dareValue === true) {
       myDare= this.state.daresArray[Math.floor(Math.random()* this.state.daresArray.length)];
      this.setState({
        selectedDare: myDare
      })
    }else {
    myDare= this.state.truthsArray[Math.floor(Math.random()* this.state.truthsArray.length)];
    this.setState({
      selectedDare: myDare
    })
  }
  
  }
  render() {
    return (
      <Container>
       <Jumbotron/>
       <Wrapper>
       <Buttons
       isADare={true}
       buttonClass="dark"
       clickFunct={this.handleButtonClick} >Dare</Buttons>
       <Buttons
       isADare={false}
       buttonClass="warning"
       clickFunct={this.handleButtonClick} >Truth</Buttons>
       <Content>
        {this.state.selectedDare.dare}
       </Content>
       </Wrapper>
       <Dare/>
      </Container>
    );
  }
}

export default App;
