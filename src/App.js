import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import Test from './test/test'
// import { Router, Route } from 'react-router'

class App extends Component {
  state = {
    cityname:'',
    AppKey:"bffc965519c784f851c817c3e18b2eef",
    redorblue:'red'
  };
  handleClick=(event) =>{
      /*state的值发生变化，自动调用this.render方法渲染*/
    this.setState({redorblue: this.state.redorblue==='red'?'blue':'red'});
  };
  changeCityName=(e)=>{
    this.setState({cityname: this.refs.cityName.value})
  }
  render() {
    var color=this.state.redorblue;
    var style={
      color:color,
    }
    return (
      <div className="App">
        <div className="toNext">to next test</div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro" style={style} onClick={this.handleClick}>
            change color test
        </p>
        输入城市名：<input type='text' value={this.state.cityname} ref="cityName" onChange={this.changeCityName} />
        <Test cityname={this.state.cityname} AppKey={this.state.AppKey}/>
      </div>
    );
  }
}
// ReactDOM.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="" component={Test} />
//       <Route path="" component={Test}>
//         <Route path="" component={Test} />
//       </Route>
//     </Route>
//   </Router>
// ), document.body)
export default App;
