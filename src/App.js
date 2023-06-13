// import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
// import Newsitem from './components/Newsitem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pagesize  = 6;
  state = {
    progress: 0
  }
  setProgress= (progress) =>{
    this.setState({progress: progress

    })
  }
  render() {
    return (

      
    <div>
 <Router >
 <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
       
      />
    <Navbar/>
      <Routes>
      <Route  path="/general" element={<News setProgress={this.setProgress} key="general" pagesize={this.pagesize} country="in" category="general"/> }/>
      <Route  path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={this.pagesize} country="in" category="health"/> }/>
      <Route  path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={this.pagesize} country="in" category="business"/> }/>
      <Route  path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={this.pagesize} country="in" category="science"/> }/>
      <Route  path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={this.pagesize} country="in" category="sports"/> }/>
      <Route  path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={this.pagesize} country="in" category="technology"/> }/>
      <Route  path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment"/> }/>     
    </Routes>
    </Router>
    </div>
    )
  }
}

