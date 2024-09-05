import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [buttonText, setButtonText] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0D1117'
      setButtonText('Enable Light Mode')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setButtonText('Enable Dark Mode')
    }
  }

  return (
    <>
      <Router>
        <Navbar title='iScript' mode={mode} toggleMode={toggleMode} buttonText={buttonText} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text here to Analyze" mode={mode} />} />
            <Route exact path="/about" element={<About heading="About Us" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
