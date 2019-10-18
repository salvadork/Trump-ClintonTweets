import React, { Component } from 'react';
import './App.css';
import Clinton from './Components/Clinton';
import { connect } from "react-redux";
import  Trump  from "./Components/Trump";

class UnconnectedApp extends Component {
  constructor() {
    super();
  this.state = {
    change: false
  }
}
  changeTweets() {
    this.setState({change:!this.state.change})
  }

  //Initial lifeline
  componentDidMount() {
    
    this.props.dispatch({type:"REQUEST_CLINTON_DATA"});
    this.props.dispatch({type:"REQUEST_TRUMP_DATA"})
  
  
}
    
  render() {
    return (
      <div class="container"> 
      {this.state.change ? <Clinton class="left"/> : <Trump /> }
        <div class="fixed-action-btn"><a class="btn-floating btn-large cyan pulse" onClick= {this.changeTweets.bind(this)}><i class="material-icons">autorenew</i></a>
        </div>
        
      </div>
    );
  }
}

 let App = connect()(UnconnectedApp)

export default App;