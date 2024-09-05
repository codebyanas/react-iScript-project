import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

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
      <Navbar title='iScript' mode={mode} toggleMode={toggleMode} buttonText={buttonText}/>
      <div className="container">
        <TextForm heading='Enter text here to Analyze' mode={mode}/>
      </div>
      {/* <div className="container">
        <About heading="About Us" />
      </div> */}
    </>
  );
}

export default App;
