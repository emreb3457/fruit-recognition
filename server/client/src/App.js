import React, { Component } from 'react'
import axios from "axios"
export default class App extends Component {
  state={
    value:"",
    key:""

  }
  componentDidMount(){
    setInterval(() => {
      this.changeinput()
    }, 2000);
    setInterval(() => {
      this.indexof()
    }, 150);
  }
  indexof=()=>{
    if(this.state.value.indexOf("Rotten")){
      console.log("çürük yok");
    }
    else{
      this.axioxpost(this.state);
      console.log("çürük meyve");
    }
  }
  changeinput=()=>{
    var e=document.getElementById("mrb").value;
    this.setState({
        value:e
    })
    console.log(this.state)
  }
  axioxpost=({key})=>{
    axios.post('http://localhost:3001/255', {
      key
    });
    
  }
  changeInput=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <div>
      <input id="mrb" name="value"  type="label" value="" ></input>
      <input id="key" name="key"  type="label" value={this.state.key}onChange={this.changeInput}></input>
      </div>
    )
  }
}
