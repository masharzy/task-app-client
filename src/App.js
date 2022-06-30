import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<h3>Home</h3>}/>
      </Routes>
    </div>
  );
}

export default App;
