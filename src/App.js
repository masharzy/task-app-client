import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Todo from './Pages/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<h3>Home</h3>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
