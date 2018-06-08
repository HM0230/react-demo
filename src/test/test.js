import React, { Component } from 'react';
// import logo from './logo.svg';
import './test.css';
import axios from 'axios'

class Test extends Component{
    state={
      weatherData:{},
    };
    ajaxtest=()=>{
      axios.get("/weather/index",{
        params:{
          cityname:this.props.cityname,
          key:this.props.AppKey,
        }
      }).then(({data:{result:{future}}})=>{
        this.setState({weatherData:future})
      }).catch((error)=>{
        console.log('error');
      });
    };

    render() {
      return (
        <div>
          <p className='search' onClick={this.ajaxtest}>查询天气</p>
          <li><span>日期</span><span>温度</span><span>week</span></li>
                {
                  Object.keys(this.state.weatherData).map((item,i)=>{
                      return <li key={i}><span>{this.state.weatherData[item].date}</span><span>{this.state.weatherData[item].temperature}</span><span>{this.state.weatherData[item].week}</span></li>
                  })
                }
        </div>
      );
    }
  };
export default Test;