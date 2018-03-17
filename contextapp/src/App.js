import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Mycontext=React.createContext();

class MyProvider extends Component{
  state={
    coursename:"React.js",
    duration:30,
    feese:"$200"
  };
  render(){
    return(
     <Mycontext.Provider value={{
       state:this.state,
       growYearOlder:()=>this.setState({duration:this.state.duration+1})
     }}>
        {this.props.children}
      </Mycontext.Provider>

    )
  }
}

class  Course extends Component{
  render(){
    return(
      <Mycontext.Consumer>
        {(context)=>(
          <React.Fragment>
            <p>Coursename: {context.state.coursename}</p>
            <p>Courseduration: {context.state.duration} hours</p>
            <p>Coursefeese: {context.state.feese}</p>
             <button onClick={context.growYearOlder}>incresecourseduration</button>
            </React.Fragment>
        )}
      </Mycontext.Consumer>
    )
  }
}
  
class Training extends Component{
  render(){
    return(
      <Course/>
    )
  }
}

class App extends Component { 
  render() {
    return (
      <MyProvider>
      <div className="App">
       <Training/>
      </div>
      </MyProvider>
    );
  }
}

export default App;
