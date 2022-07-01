import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import Spinner from "../Spinner/Spinner";

const Navbar = () => {
  const { isLoading, data: completedTasks } = useQuery("completedTasks", () =>
    fetch("http://localhost:5000/tasks/completed").then((res) => res.json())
  );
  if (isLoading) return <Spinner />;

  const menu = (
    <li>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/completed-tasks" className="relative">
        Completed Tasks{" "}
        <span className="bg-error px-2 absolute text-white rounded-full -right-1 -top-1">
          {completedTasks.length}
        </span>
      </CustomLink>
      <CustomLink to="/todo">To-Do</CustomLink>
      <CustomLink to="/calendar">Calendar</CustomLink>
    </li>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto lg:px-20 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-lg text-white">
          TASK APP
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
