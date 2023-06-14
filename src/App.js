// import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Newsitem from './components/Newsitem';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  // eslint-disable-next-line 
  const pagesize = 6;
  // eslint-disable-next-line 
  const apiKey = process.env.REACT_APP_NEWS_API;
  // eslint-disable-next-line 
  const [progress, setProgress ,] = useState(0);
  return (
    <div>
      <Router >
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}

        />
        <Navbar />
        <Routes>
          <Route path="/general" element={<News setProgress={setProgress} apiKey={ apiKey} key="general" pagesize={ pagesize} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={ apiKey} key="health" pagesize={ pagesize} country="in" category="health" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={ apiKey} key="business" pagesize={ pagesize} country="in" category="business" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={ apiKey} key="science" pagesize={ pagesize} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={ apiKey} key="sports" pagesize={ pagesize} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={ apiKey} key="technology" pagesize={ pagesize} country="in" category="technology" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={ apiKey} key="entertainment" pagesize={ pagesize} country="in" category="entertainment" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;
