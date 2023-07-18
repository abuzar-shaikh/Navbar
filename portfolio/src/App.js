import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import "../src/Components/Heros/Heros"
import Heros from '../src/Components/Heros/Heros';
import About from './Components/AboutMe/About';




function App() {
  return (
    <div className="App">
    <NavBar/>
    <Heros/>
    <About/>

  
 
    </div>
  );
}

export default App;
