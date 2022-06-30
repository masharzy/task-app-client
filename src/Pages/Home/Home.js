import React from "react";
import { useQuery } from "react-query";

const Home = () => {
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
          <div class="rounded-lg bg-gray-800 shadow-xl text-left p-5">
            <p>{task.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
