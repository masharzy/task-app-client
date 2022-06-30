import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  const {
    isLoading,
    data: tasks,
    refetch,
  } = useQuery("tasks", () =>
    fetch("http://localhost:5000/tasks").then((res) => res.json())
  );

  if (isLoading) return <progress class="progress w-56"></progress>;

  return (
    <div className="container grid lg:grid-cols-2 lg:px-40 px-5 lg:gap-x-5 mx-auto">
      {tasks.map((task) => (
        <div className="w-full mx-auto mt-5">
          <div class="rounded-lg bg-gray-800 shadow-xl text-left p-5 flex justify-between items-center">
            <div className="flex">
              <input type="checkbox" class="checkbox mr-2" />
              <p>{task.name}</p>
            </div>
            <Link to={`/update-task/${task._id}`}><FontAwesomeIcon className="text-xl cursor-pointer" title="Edit Task" icon={faPenToSquare} /></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
