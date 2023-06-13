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

export default class App extends Component {
  pagesize  = 6;
  render() {
    return (

      
    <div>
 <Router >
    <Navbar/>
      <Routes>
      <Route  path="/general" element={<News key="general" pagesize={this.pagesize} country="in" category="general"/> }/>
      <Route  path="/health" element={<News key="health" pagesize={this.pagesize} country="in" category="health"/> }/>
      <Route  path="/business" element={<News key="business" pagesize={this.pagesize} country="in" category="business"/> }/>
      <Route  path="/science" element={<News key="science" pagesize={this.pagesize} country="in" category="science"/> }/>
      <Route  path="/sports" element={<News key="sports" pagesize={this.pagesize} country="in" category="sports"/> }/>
      <Route  path="/technology" element={<News key="technology" pagesize={this.pagesize} country="in" category="technology"/> }/>
      <Route  path="/entertainment" element={<News key="entertainment" pagesize={this.pagesize} country="in" category="entertainment"/> }/>     
    </Routes>
    </Router>
    </div>
    )
  }
}

