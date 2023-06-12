// import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
// import Newsitem from './components/Newsitem';

export default class App extends Component {
  render() {
    return (
    <div>
    <Navbar/>
    <News/>
    </div>
    )
  }
}

