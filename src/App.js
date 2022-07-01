import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Todo from "./Pages/Todo/Todo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home/Home";
import UpdateTask from "./Pages/UpdateTask/UpdateTask";
import CompletedTasks from "./Pages/CompletedTasks/CompletedTasks";
import SearchByDate from "./Pages/SearchByDate/SearchByDate";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/update-task/:id" element={<UpdateTask />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/calendar" element={<SearchByDate />} />
      </Routes>
      <Footer/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
