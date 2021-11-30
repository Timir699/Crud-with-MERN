import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Display from './Components/Display';
import Add from './Components/Add';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

       <Link to="/display">Display</Link>
       <Link to="/add">Add</Link>

      <Routes>
        <Route path="/display" element={<Display/>} ></Route>
        <Route path="/add" element={<Add/>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
