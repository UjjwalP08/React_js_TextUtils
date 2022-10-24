import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    // jsx framegents <> & </>
    <>
      <Navbar title="Text-Utils" abouttext = "About US"/>
      {/* using props we can rander the title name which we want */}

      {/* Default Prototyps */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
