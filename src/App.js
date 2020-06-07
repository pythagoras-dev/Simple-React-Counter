import React,{Component} from 'react'
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state={
      count:0
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    //setState is a method used when you wanna change state
    this.setState(prevState=>{
      return{
        count:prevState.count+2
      }
    })
}
render(){
  return(
    <div>
    <h1>{this.state.count}</h1>
    <button onClick={this.handleClick}>Click me</button>
    </div>
  )
}
}



export default App;
