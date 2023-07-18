import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <About/>
 
    </div>
  );
}

export default App;