import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='iScript' />
      {/* <div className="container">
        <TextForm heading='Enter text here to Analyze' />
      </div> */}
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
