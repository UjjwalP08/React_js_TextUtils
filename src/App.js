import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    // jsx framegents <> & </>
    <>
      {/* using props we can rander the title name which we want */}
      <Navbar title="Text-Utils" abouttext="About US" />

      {/* <Navbar /> */}
      {/* Default Prototyps */}

      <div className="container">

        <Textform heading="Enter Your Text"/>

        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
